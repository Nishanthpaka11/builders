import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './Interiors.css';

const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Office'];

const portfolioItems = [
  { id: 1, img: '/images/interior-living.png', title: 'Modern Minimalist Living', category: 'Living Room', style: 'Contemporary' },
  { id: 2, img: '/images/interior-kitchen.png', title: 'Chef\'s Dream Kitchen', category: 'Kitchen', style: 'Modern' },
  { id: 3, img: '/images/interior-bedroom.png', title: 'Serene Master Suite', category: 'Bedroom', style: 'Luxury' },
  { id: 4, img: '/images/hero-house.png', title: 'Open Plan Living', category: 'Living Room', style: 'Scandinavian' },
  { id: 5, img: '/images/interior-living.png', title: 'Cozy Reading Nook', category: 'Living Room', style: 'Bohemian' },
  { id: 6, img: '/images/interior-kitchen.png', title: 'Industrial Kitchen', category: 'Kitchen', style: 'Industrial' },
  { id: 7, img: '/images/interior-bedroom.png', title: 'Guest Bedroom Suite', category: 'Bedroom', style: 'Classic' },
  { id: 8, img: '/images/house-sale.png', title: 'Home Office Setup', category: 'Office', style: 'Modern' },
  { id: 9, img: '/images/interior-living.png', title: 'Spa-Inspired Bathroom', category: 'Bathroom', style: 'Luxury' },
];

const designServices = [
  {
    title: 'Space Planning',
    desc: 'Optimize your floor plan for maximum functionality and flow. We create layouts that make sense for your lifestyle.',
    img: '/images/interior-living.png',
  },
  {
    title: 'Custom Furniture',
    desc: 'Bespoke furniture designed and crafted specifically for your space — unique pieces that reflect your personality.',
    img: '/images/interior-kitchen.png',
  },
  {
    title: 'Color & Material',
    desc: 'Expert color consultations and material selection to create cohesive, visually stunning environments.',
    img: '/images/interior-bedroom.png',
  },
];

const Interiors = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPortfolio = portfolioItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <main className="interiors-page" id="interiors-page">
      {/* Hero */}
      <section className="page-hero" id="interiors-hero">
        <div className="page-hero__bg">
          <img src="/images/interior-living.png" alt="Interior design" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">

          <h1 className="page-hero__title">Spaces That Inspire<br />& Delight</h1>
          <p className="page-hero__subtitle">
            Our interior design team creates living spaces that are beautiful, functional, and uniquely yours.
          </p>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="interiors-philosophy section-padding" id="interiors-philosophy">
        <div className="container interiors-philosophy__grid">
          <div className="interiors-philosophy__content">
            <span className="section-label">Our Philosophy</span>
            <h2 className="section-title">Design Is How It Works, Not Just How It Looks</h2>
            <p className="interiors-philosophy__text">
              We believe that great interior design balances aesthetics with functionality.
              Every space we design tells a story — your story. We take the time to understand your
              lifestyle, preferences, and aspirations to create environments that feel authentically you.
            </p>
            <p className="interiors-philosophy__text">
              From initial concept to final styling, our experienced design team handles every detail
              with care and creativity. Whether you're looking for a complete home makeover or a
              single room refresh, we bring the same level of passion and expertise.
            </p>
            <Link to="/contact" className="btn btn-dark" id="interiors-consult-btn">
              Book a Design Consultation <FiArrowRight />
            </Link>
          </div>
          <div className="interiors-philosophy__images">
            <div className="interiors-philosophy__img-1">
              <img src="/images/interior-living.png" alt="Living room" />
            </div>
            <div className="interiors-philosophy__img-2">
              <img src="/images/interior-bedroom.png" alt="Bedroom" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="interiors-services section-padding" id="interiors-services">
        <div className="container">
          <div className="interiors-services__header">
            <span className="section-label">Design Services</span>
            <h2 className="section-title">What We Offer</h2>
          </div>
          <div className="interiors-services__grid">
            {designServices.map((service, i) => (
              <div className="interior-service-card" key={i} id={`interior-service-${i}`}>
                <div className="interior-service-card__img">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="interior-service-card__content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="interiors-portfolio section-padding" id="interiors-portfolio">
        <div className="container">
          <div className="interiors-portfolio__header">
            <span className="section-label">Our Portfolio</span>
            <h2 className="section-title">Recent Interior Projects</h2>
          </div>
          <div className="interiors-portfolio__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`interiors-portfolio__filter ${activeCategory === cat ? 'interiors-portfolio__filter--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                id={`interiors-filter-${cat.toLowerCase().replace(' ', '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="interiors-portfolio__grid">
            {filteredPortfolio.map((item) => (
              <div className="portfolio-card" key={item.id} id={`portfolio-card-${item.id}`}>
                <div className="portfolio-card__img">
                  <img src={item.img} alt={item.title} />
                  <div className="portfolio-card__overlay">
                    <span className="portfolio-card__style">{item.style}</span>
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="interiors-cta section-padding" id="interiors-cta">
        <div className="container interiors-cta__inner">
          <h2 className="interiors-cta__title">Ready to Transform Your Space?</h2>
          <p className="interiors-cta__text">
            Book a free design consultation with our interior experts today.
          </p>
          <Link to="/contact" className="btn btn-primary" id="interiors-cta-btn">
            Get Started <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Interiors;
