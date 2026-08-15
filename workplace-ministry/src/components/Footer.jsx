import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Workplace Ministry</h3>
          <p>Bringing faith to the workplace and transforming lives through Christ-centered ministry.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/ministries">Ministries</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get Involved</h4>
          <ul>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/prayer">Prayer Request</a></li>
            <li><a href="/volunteer">Volunteer</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@workplaceministry.org</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Workplace Ministry. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
