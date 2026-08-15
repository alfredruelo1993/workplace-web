import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Users, Book, Heart, Calendar, Coffee, Briefcase } from 'lucide-react'

const Ministries = () => {
  const ministries = [
    {
      icon: <Users size={48} />,
      title: 'Fellowship Groups',
      description: 'Weekly gatherings for prayer, worship, and spiritual growth in a supportive community environment.',
      schedule: 'Every Wednesday, 7:00 PM'
    },
    {
      icon: <Book size={48} />,
      title: 'Bible Studies',
      description: 'In-depth scripture study and application for daily life, exploring God\'s word together.',
      schedule: 'Sundays, 9:00 AM'
    },
    {
      icon: <Heart size={48} />,
      title: 'Community Outreach',
      description: 'Serving our community through volunteer work, support programs, and acts of kindness.',
      schedule: 'Monthly events'
    },
    {
      icon: <Calendar size={48} />,
      title: 'Events & Retreats',
      description: 'Special gatherings, conferences, and spiritual retreats to deepen your faith journey.',
      schedule: 'Quarterly'
    },
    {
      icon: <Coffee size={48} />,
      title: 'Morning Prayer',
      description: 'Start your day with prayer and devotion before work, setting the tone for a blessed day.',
      schedule: 'Weekdays, 6:30 AM'
    },
    {
      icon: <Briefcase size={48} />,
      title: 'Professional Development',
      description: 'Integrating faith with professional skills, ethics, and leadership development.',
      schedule: 'Bi-weekly, Saturdays'
    }
  ]

  return (
    <div className="page ministries-page">
      <Navbar />
      
      <section className="page-header">
        <h1>Our Ministries</h1>
        <p>Discover ways to grow in faith and serve others</p>
      </section>

      <section className="ministries-list">
        <div className="container">
          <div className="ministry-grid">
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ministry-card detailed"
              >
                <div className="ministry-icon-wrapper">{ministry.icon}</div>
                <h3>{ministry.title}</h3>
                <p>{ministry.description}</p>
                <div className="ministry-schedule">
                  <strong>Schedule:</strong> {ministry.schedule}
                </div>
                <button className="btn-secondary btn-small">Join Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Involved?</h2>
            <p>Join one of our ministries and start making a difference today</p>
            <a href="/contact" className="btn-primary btn-large">Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Ministries
