import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  const options = {
    cacheControl: {
      // We set a long cache for static assets
      browserTTL: 60 * 60 * 24 * 365,
      edgeTTL: 60 * 60 * 24 * 365,
    },
  }

  // Set custom handling for SPA routing
  options.mapRequestToAsset = handleSPARouting

  try {
    if (DEBUG) {
      // Customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }

    const page = await getAssetFromKV(event, options)

    // Allow headers to be altered
    const response = new Response(page.body, page)

    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')

    return response
  } catch (e) {
    // If an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req),
        })

        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 200,
          headers: {
            ...notFoundResponse.headers,
            'cache-control': 'no-cache',
          },
        })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}

/**
 * Handles SPA routing - serves index.html for non-asset requests
 */
function handleSPARouting(request) {
  const url = new URL(request.url)
  
  // Check if the path looks like an asset (has extension)
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(url.pathname)
  
  // If it's not an asset, serve index.html for SPA routing
  if (!hasExtension) {
    return mapRequestToAsset(new Request(`${url.origin}/index.html`, request))
  }
  
  // Otherwise, use the default mapping
  return mapRequestToAsset(request)
}
