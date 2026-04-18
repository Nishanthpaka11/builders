import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div className="footer__cta-content">
            <h2 className="footer__cta-title">Ready to Find Your Dream Property?</h2>
            <p className="footer__cta-text">Right Property to Right Customer — free consultation available.</p>
          </div>
          <div className="footer__cta-actions">
            <Link to="/contact" className="btn btn-primary" id="footer-cta-btn">Get Started <FiArrowRight /></Link>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/images/logo.png" alt="Nagarjuna Estates" className="footer__logo-img" />
              <div className="footer__logo-text-wrap">
                <span className="footer__logo-text">Nagarjuna <span className="footer__logo-accent">Estates</span></span>
                <span className="footer__logo-tagline">Right Property to Right Customer</span>
              </div>
            </Link>
            <p className="footer__description">Nagarjuna Estates brings the right property to the right customer. Your trusted partner in construction, home sales, and interior design.</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="footer__social-link" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="footer__social-link" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="footer__social-link" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__col-links">
              <li><Link to="/construction">Residential Construction</Link></li>
              <li><Link to="/construction">Commercial Buildings</Link></li>
              <li><Link to="/properties">Property Sales</Link></li>
              <li><Link to="/interiors">Interior Design</Link></li>
              <li><Link to="/interiors">Home Renovation</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__col-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/properties">Our Projects</Link></li>
              <li><Link to="/interiors">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Info</h4>
            <ul className="footer__contact-list">
              <li><FiMapPin className="footer__contact-icon" /><span>Nagarjuna Estates<br />Hyderabad, Telangana, India</span></li>
              <li><FiPhone className="footer__contact-icon" /><span>+91 98765 43210</span></li>
              <li><FiMail className="footer__contact-icon" /><span>info@nagarjunaestates.com</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} Nagarjuna Estates. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
