import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to backend API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <main className="contact-page" id="contact-page">
      {/* Hero */}
      <section className="page-hero" id="contact-hero">
        <div className="page-hero__bg">
          <img src="/images/hero-house.png" alt="Contact" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">

          <h1 className="page-hero__title">Let's Start<br />a Conversation</h1>
          <p className="page-hero__subtitle">
            Have a project in mind? We'd love to hear from you. Reach out and let's make it happen.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section-padding" id="contact-content">
        <div className="container contact-content__grid">
          {/* Info Column */}
          <div className="contact-info">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">We're Here to Help</h2>
            <p className="contact-info__text">
              Whether you're looking to build a new home, find the perfect property, or redesign your
              interior spaces — we're just a message away. Our team typically responds within 24 hours.
            </p>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__icon"><FiMapPin /></div>
                <div>
                  <h4>Visit Our Office</h4>
                  <p>123 Builder's Lane, Suite 400<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon"><FiPhone /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (234) 567-8900<br />+1 (234) 567-8901</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon"><FiMail /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@buildnest.com<br />support@buildnest.com</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon"><FiClock /></div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday – Friday: 9:00 AM – 6:00 PM<br />Saturday: 10:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <h3 className="contact-form__title">Send Us a Message</h3>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text" name="name" id="contact-name"
                    placeholder="John Doe" value={formState.name}
                    onChange={handleChange} required
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email" name="email" id="contact-email"
                    placeholder="john@example.com" value={formState.email}
                    onChange={handleChange} required
                  />
                </div>
              </div>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel" name="phone" id="contact-phone"
                    placeholder="+1 (234) 567-8900" value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-service">Service Interested In</label>
                  <select name="service" id="contact-service" value={formState.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    <option value="construction">Construction</option>
                    <option value="property-sales">Property Sales</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  name="message" id="contact-message" rows="5"
                  placeholder="Tell us about your project..." value={formState.message}
                  onChange={handleChange} required
                />
              </div>
              <button type="submit" className="btn btn-primary contact-form__submit" id="contact-submit-btn">
                <FiSend /> Send Message
              </button>
              {submitted && (
                <div className="contact-form__success">
                  <FiCheckCircle /> Thank you! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="contact-map" id="contact-map">
        <div className="contact-map__placeholder">
          <FiMapPin className="contact-map__icon" />
          <p>Our Office Location — 123 Builder's Lane, New York, NY</p>
          <span>Map integration available with Google Maps API</span>
        </div>
      </section>
    </main>
  );
};

export default Contact;
