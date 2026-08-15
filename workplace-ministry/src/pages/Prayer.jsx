import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heart, HandHeart } from 'lucide-react'
import { useState } from 'react'

const Prayer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prayerRequest: '',
    isUrgent: false,
    allowSharing: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for sharing your prayer request. Our prayer team will lift you up in prayer.')
    setFormData({ name: '', email: '', prayerRequest: '', isUrgent: false, allowSharing: false })
  }

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  return (
    <div className="page prayer-page">
      <Navbar />
      
      <section className="page-header">
        <h1>Prayer Ministry</h1>
        <p>Submit your prayer requests and let us pray with you</p>
      </section>

      <section className="prayer-content">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prayer-intro"
          >
            <Heart size={64} className="prayer-icon" />
            <h2>We're Here to Pray With You</h2>
            <p>
              "The prayer of a righteous person is powerful and effective." - James 5:16
            </p>
            <p>
              Our dedicated prayer team is committed to lifting up your needs before God. 
              Whether you're facing challenges, celebrating victories, or simply need spiritual 
              support, we're here to stand with you in prayer.
            </p>
          </motion.div>

          <div className="prayer-request-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prayer-form-wrapper"
            >
              <h3>Submit a Prayer Request</h3>
              <form onSubmit={handleSubmit} className="prayer-form">
                <div className="form-group">
                  <label htmlFor="name">Name (Optional)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="prayerRequest">Prayer Request</label>
                  <textarea
                    id="prayerRequest"
                    name="prayerRequest"
                    value={formData.prayerRequest}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Share your prayer request..."
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="isUrgent"
                      checked={formData.isUrgent}
                      onChange={handleChange}
                    />
                    <span>This is an urgent prayer need</span>
                  </label>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="allowSharing"
                      checked={formData.allowSharing}
                      onChange={handleChange}
                    />
                    <span>I allow this request to be shared with our prayer team</span>
                  </label>
                </div>

                <button type="submit" className="btn-primary btn-large">
                  <HandHeart size={20} />
                  Submit Prayer Request
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prayer-info"
            >
              <h3>Prayer Opportunities</h3>
              
              <div className="prayer-opportunity">
                <h4>Weekly Prayer Meetings</h4>
                <p>Join us every Wednesday at 7:00 PM for corporate prayer.</p>
              </div>

              <div className="prayer-opportunity">
                <h4>Morning Prayer Call</h4>
                <p>Daily prayer call at 6:30 AM on weekdays. Dial (555) 123-4567.</p>
              </div>

              <div className="prayer-opportunity">
                <h4>Prayer Chain</h4>
                <p>Join our emergency prayer chain for urgent needs. Contact us to sign up.</p>
              </div>

              <div className="prayer-opportunity">
                <h4>One-on-One Prayer</h4>
                <p>Schedule a personal prayer session with our prayer ministers.</p>
              </div>

              <div className="scripture-box">
                <blockquote>
                  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
                  <cite>- Philippians 4:6</cite>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Prayer
