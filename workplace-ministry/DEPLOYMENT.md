# Workplace Ministry - Cloudflare Deployment Guide

## 🚀 Quick Deploy to Cloudflare Pages (Recommended)

### Option 1: Direct GitHub Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Workplace Ministry"
   git remote add origin https://github.com/yourusername/workplace-ministry.git
   git push -u origin main
   ```

2. **Deploy via Cloudflare Dashboard**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `workplace-ministry` (if needed)
   - Click **Deploy**

### Option 2: Direct Upload with Wrangler CLI

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy to Cloudflare Pages**
   ```bash
   cd workplace-ministry
   npm run build
   wrangler pages deploy dist --project-name=workplace-ministry
   ```

## 📁 Project Structure

```
workplace-ministry/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component
│   │   └── Footer.jsx      # Footer component
│   ├── pages/
│   │   ├── Home.jsx        # Homepage
│   │   ├── About.jsx       # About page
│   │   ├── Ministries.jsx  # Ministries page
│   │   ├── Events.jsx      # Events page
│   │   ├── Contact.jsx     # Contact page with form
│   │   ├── Prayer.jsx      # Prayer request page
│   │   └── Donate.jsx      # Donation page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point with routing
│   └── index.css           # Global styles
├── public/                 # Static assets
├── dist/                   # Build output (generated)
├── workers-site/           # Cloudflare Workers code
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── wrangler.toml           # Cloudflare Workers config
└── package.json            # Dependencies & scripts
```

## ✨ Features

- **Modern React 19** with Vite for fast development
- **React Router** for seamless navigation
- **Framer Motion** animations for premium feel
- **Lucide Icons** for beautiful iconography
- **Responsive Design** - works on all devices
- **SEO Optimized** with meta tags
- **Cloudflare Ready** - optimized for edge deployment

## 🎨 Pages Included

1. **Home** - Hero section, mission, ministries preview
2. **About** - Story, mission, vision, values
3. **Ministries** - All ministry programs with schedules
4. **Events** - Upcoming events calendar
5. **Contact** - Contact form and information
6. **Prayer** - Prayer request submission
7. **Donate** - Donation portal with multiple options

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Production Deployment

### Cloudflare Pages (Recommended)
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments
- Free tier: 100k requests/day

### Cloudflare Workers Sites
- Edge computing capabilities
- Custom routing logic
- Advanced caching

## 📊 Performance Optimization

The build includes:
- Code splitting
- Tree shaking
- Minification
- Gzip compression
- Asset optimization
- Lazy loading

## 🎯 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2c5f7f;
  --secondary-color: #d4a574;
  --accent-color: #8b7355;
}
```

### Content
Update text in respective page components under `src/pages/`

### Contact Information
Update in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

## 📞 Support

For issues or questions:
- Check the documentation
- Review Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- Vite docs: https://vitejs.dev/

## 📄 License

MIT License - Feel free to use for your ministry!

---

**Built with ❤️ for Workplace Ministry**
