import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Users, Target, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className="page about-page">
      <Navbar />
      
      <section className="page-header">
        <h1>About Us</h1>
        <p>Learn more about our mission and values</p>
      </section>

      <section className="about-content">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-section"
          >
            <h2>Our Story</h2>
            <p>
              Workplace Ministry was founded with a vision to bring faith into the professional 
              world. We believe that every workplace is an opportunity to demonstrate Christ's 
              love and make a positive impact in our communities.
            </p>
            <p>
              Since our inception, we have grown to serve thousands of professionals across 
              various industries, helping them integrate their faith with their daily work 
              and become lights in their workplaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="values-grid"
          >
            <div className="value-card">
              <Target size={48} className="value-icon" />
              <h3>Our Mission</h3>
              <p>To empower Christians in the workplace to live out their faith authentically and effectively.</p>
            </div>

            <div className="value-card">
              <Users size={48} className="value-icon" />
              <h3>Our Vision</h3>
              <p>To see every workplace transformed by the presence and influence of committed Christians.</p>
            </div>

            <div className="value-card">
              <Heart size={48} className="value-icon" />
              <h3>Our Values</h3>
              <p>Faith, Integrity, Service, Community, and Excellence in all we do.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="scripture-section"
          >
            <h2>Our Foundation</h2>
            <blockquote>
              "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
              <cite>- Colossians 3:23</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
