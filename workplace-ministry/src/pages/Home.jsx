import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Users, Book, Heart, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page home-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bringing Faith to the Workplace
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming lives and workplaces through Christ-centered ministry
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <Link to="/about" className="btn-primary">
              Learn More <ArrowRight size={20} />
            </Link>
            <Link to="/donate" className="btn-secondary">
              Support Our Mission
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mission-content"
          >
            <h2>Our Mission</h2>
            <p>
              We are dedicated to spreading the Gospel in workplaces across our community. 
              Through prayer groups, Bible studies, and fellowship, we help professionals 
              integrate their faith into their daily work lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="ministries-preview">
        <div className="container">
          <h2>Our Ministries</h2>
          <div className="ministry-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="ministry-card"
            >
              <Users size={48} className="ministry-icon" />
              <h3>Fellowship Groups</h3>
              <p>Weekly gatherings for prayer, worship, and spiritual growth</p>
              <Link to="/ministries" className="learn-more">Learn More →</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ministry-card"
            >
              <Book size={48} className="ministry-icon" />
              <h3>Bible Studies</h3>
              <p>In-depth scripture study and application for daily life</p>
              <Link to="/ministries" className="learn-more">Learn More →</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="ministry-card"
            >
              <Heart size={48} className="ministry-icon" />
              <h3>Community Outreach</h3>
              <p>Serving our community through volunteer work and support</p>
              <Link to="/ministries" className="learn-more">Learn More →</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ministry-card"
            >
              <Calendar size={48} className="ministry-icon" />
              <h3>Events & Retreats</h3>
              <p>Special gatherings, conferences, and spiritual retreats</p>
              <Link to="/ministries" className="learn-more">Learn More →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-content"
          >
            <h2>Join Us This Sunday</h2>
            <p>Be part of our growing community of faith in the workplace</p>
            <Link to="/events" className="btn-primary btn-large">
              View Upcoming Events
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
