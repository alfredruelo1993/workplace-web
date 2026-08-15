import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const Events = () => {
  const events = [
    {
      title: 'Sunday Worship Service',
      date: 'Every Sunday',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Chapel',
      description: 'Join us for weekly worship, prayer, and inspiring messages.',
      attendees: 'All welcome'
    },
    {
      title: 'Wednesday Bible Study',
      date: 'Every Wednesday',
      time: '7:00 PM - 8:30 PM',
      location: 'Fellowship Hall',
      description: 'Deep dive into Scripture with interactive discussion and application.',
      attendees: 'All ages'
    },
    {
      title: 'Monthly Community Outreach',
      date: 'First Saturday of Month',
      time: '9:00 AM - 2:00 PM',
      location: 'Community Center',
      description: 'Serve our community through food distribution and support programs.',
      attendees: 'Volunteers needed'
    },
    {
      title: 'Young Professionals Network',
      date: 'Second Thursday',
      time: '6:30 PM - 8:00 PM',
      location: 'Downtown Office',
      description: 'Networking and fellowship for young professionals in the workplace.',
      attendees: 'Ages 22-35'
    },
    {
      title: 'Annual Faith & Work Conference',
      date: 'October 15-17, 2026',
      time: 'Full Day Event',
      location: 'Convention Center',
      description: 'Three-day conference on integrating faith and professional life.',
      attendees: 'Registration open'
    },
    {
      title: 'Men\'s Breakfast Fellowship',
      date: 'Last Saturday of Month',
      time: '7:00 AM - 9:00 AM',
      location: 'Church Cafeteria',
      description: 'Morning fellowship, breakfast, and devotional for men.',
      attendees: 'Men of all ages'
    }
  ]

  return (
    <div className="page events-page">
      <Navbar />
      
      <section className="page-header">
        <h1>Upcoming Events</h1>
        <p>Join us for worship, fellowship, and service opportunities</p>
      </section>

      <section className="events-list">
        <div className="container">
          <div className="events-grid">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="event-card"
              >
                <div className="event-date-badge">
                  <Calendar size={20} />
                  <span>{event.date}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="detail-item">
                    <Users size={16} />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <button className="btn-primary btn-small">Register Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Events
