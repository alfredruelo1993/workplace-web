import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heart, DollarSign, CreditCard, Gift } from 'lucide-react'
import { useState } from 'react'

const Donate = () => {
  const [amount, setAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [frequency, setFrequency] = useState('once')

  const presetAmounts = [25, 50, 100, 250, 500]

  const handlePresetClick = (value) => {
    setAmount(value)
    setCustomAmount('')
  }

  const handleCustomChange = (e) => {
    const value = e.target.value
    setCustomAmount(value)
    if (value && !isNaN(value)) {
      setAmount(parseFloat(value))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for your generous donation of $${amount} (${frequency === 'once' ? 'one-time' : 'monthly'})! Your support helps us continue our ministry.`)
  }

  return (
    <div className="page donate-page">
      <Navbar />
      
      <section className="page-header">
        <h1>Give Today</h1>
        <p>Your generosity makes our ministry possible</p>
      </section>

      <section className="donate-content">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="donate-intro"
          >
            <Heart size={64} className="donate-icon" />
            <h2>Support Our Mission</h2>
            <p>
              "Each of you should give what you have decided in your heart to give, not reluctantly 
              or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
            <p>
              Your donations help us continue spreading the Gospel in workplaces, supporting 
              community outreach programs, and providing resources for spiritual growth.
            </p>
          </motion.div>

          <div className="donation-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="donation-form-wrapper"
            >
              <h3>Make a Donation</h3>
              <form onSubmit={handleSubmit} className="donation-form">
                <div className="form-section">
                  <label>Donation Amount</label>
                  <div className="amount-presets">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        className={`amount-btn ${amount === preset && !customAmount ? 'active' : ''}`}
                        onClick={() => handlePresetClick(preset)}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                  <div className="custom-amount">
                    <span className="currency-symbol">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomChange}
                      placeholder="Custom amount"
                      min="1"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <label>Frequency</label>
                  <div className="frequency-options">
                    <label className={`frequency-option ${frequency === 'once' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="frequency"
                        checked={frequency === 'once'}
                        onChange={() => setFrequency('once')}
                      />
                      <DollarSign size={20} />
                      <span>One-Time</span>
                    </label>
                    <label className={`frequency-option ${frequency === 'monthly' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="frequency"
                        checked={frequency === 'monthly'}
                        onChange={() => setFrequency('monthly')}
                      />
                      <CreditCard size={20} />
                      <span>Monthly</span>
                    </label>
                  </div>
                </div>

                <div className="donation-summary">
                  <p>You're donating: <strong>${amount}</strong></p>
                  <p>Frequency: <strong>{frequency === 'once' ? 'One-Time' : 'Monthly'}</strong></p>
                </div>

                <button type="submit" className="btn-primary btn-large btn-donate-submit">
                  <Gift size={20} />
                  Complete Donation
                </button>

                <p className="secure-note">
                  🔒 Your donation is secure and tax-deductible
                </p>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="donation-info"
            >
              <h3>Where Your Gift Goes</h3>
              
              <div className="impact-item">
                <div className="impact-icon">
                  <DollarSign size={32} />
                </div>
                <div className="impact-content">
                  <h4>Workplace Outreach (40%)</h4>
                  <p>Supporting ministry presence in workplaces across our region</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon">
                  <Heart size={32} />
                </div>
                <div className="impact-content">
                  <h4>Community Programs (30%)</h4>
                  <p>Food assistance, counseling, and support services</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon">
                  <Gift size={32} />
                </div>
                <div className="impact-content">
                  <h4>Youth & Education (20%)</h4>
                  <p>Bible studies, mentorship, and educational resources</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon">
                  <CreditCard size={32} />
                </div>
                <div className="impact-content">
                  <h4>Operations (10%)</h4>
                  <p>Administrative costs to keep our ministry running</p>
                </div>
              </div>

              <div className="other-ways">
                <h3>Other Ways to Give</h3>
                <ul>
                  <li><strong>Mail:</strong> Send checks to 123 Faith Street, Cityville, ST 12345</li>
                  <li><strong>Bank Transfer:</strong> Contact us for account details</li>
                  <li><strong>Stocks/Securities:</strong> Donate appreciated assets</li>
                  <li><strong>Planned Giving:</strong> Include us in your estate planning</li>
                </ul>
              </div>

              <div className="scripture-box">
                <blockquote>
                  "And God is able to bless you abundantly, so that in all things at all times, 
                  having all that you need, you will abound in every good work."
                  <cite>- 2 Corinthians 9:8</cite>
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

export default Donate
