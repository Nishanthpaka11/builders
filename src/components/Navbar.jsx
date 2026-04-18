import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/construction', label: 'Construction' },
    { path: '/properties', label: 'Properties' },
    { path: '/interiors', label: 'Interiors' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" id="navbar-logo">
          <img src="/images/logo.png" alt="Nagarjuna Estates" className="navbar__logo-img" />
          <div className="navbar__logo-text-wrap">
            <span className="navbar__logo-text">
              Nagarjuna <span className="navbar__logo-accent">Estates</span>
            </span>
            <span className="navbar__logo-tagline">Right Property to Right Customer</span>
          </div>
        </Link>

        <nav className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`} id="navbar-nav">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                  id={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar__actions-mobile">
            <a href="tel:+919876543210" className="btn btn-primary" id="navbar-call-btn-mobile">
              <FiPhone /> Call Us
            </a>
          </div>
        </nav>

        <div className="navbar__actions">
          <a href="tel:+919876543210" className="btn btn-primary" id="navbar-call-btn">
            <FiPhone /> Call Us
          </a>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          id="navbar-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {isMenuOpen && <div className="navbar__overlay" onClick={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
