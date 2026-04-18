import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiAward, FiHome, FiTool, FiLayers } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import './Home.css';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '200+', label: 'Happy Families' },
  { number: '50+', label: 'Expert Team' },
];

const services = [
  {
    icon: <FiTool />,
    title: 'Construction',
    desc: 'From foundation to finish, we build residential and commercial structures with precision and quality craftsmanship.',
    link: '/construction',
  },
  {
    icon: <FiHome />,
    title: 'Home Sales',
    desc: 'Browse our exclusive collection of ready-to-move homes, villas, and apartments in prime locations.',
    link: '/properties',
  },
  {
    icon: <FiLayers />,
    title: 'Interior Design',
    desc: 'Transform your spaces with our expert interior designers. Modern, contemporary, and classic aesthetics.',
    link: '/interiors',
  },
];

const features = [
  'Sustainable & Green Building Practices',
  'Licensed & Insured Professionals',
  'On-Time Project Delivery',
  'Premium Quality Materials',
  'Transparent Pricing — No Hidden Costs',
  '5-Year Structural Warranty',
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    text: 'Nagarjuna Estates turned our dream home into reality. Every detail was meticulously planned and executed. The team was professional and truly cared about our vision.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Property Investor',
    text: 'I have worked with many construction companies, but Nagarjuna Estates stands out. Their quality of work and commitment to deadlines is unmatched — truly right property to right customer!',
    rating: 5,
  },
  {
    name: 'Anil Reddy',
    role: 'Interior Design Client',
    text: 'The interior design team at Nagarjuna Estates completely transformed our living space. They understood our aesthetic preferences perfectly and delivered beyond expectations.',
    rating: 5,
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  return (
    <main className="home" id="home-page">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero-section">
        <div className="hero__bg">
          <img src="/images/hero-house.png" alt="Luxury modern home" />
          <div className="hero__overlay" />
        </div>

        <div className="container hero__content" style={{ zIndex: 10, pointerEvents: 'none' }}>
          <motion.div
            className="hero__text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ pointerEvents: 'auto' }}
          >

            <motion.h1 className="hero__title" variants={fadeInUp}>
              We Build <span className="hero__title-accent">Dreams</span>
              <br />Into Reality
            </motion.h1>
            <motion.p className="hero__subtitle" variants={fadeInUp}>
              Nagarjuna Estates — your trusted partner in construction, home sales, and interior design.
              From blueprints to breathtaking spaces, experience the difference of working with experts who care.
            </motion.p>
            <motion.div className="hero__actions" variants={fadeInUp}>
              <Link to="/properties" className="btn btn-primary" id="hero-explore-btn">
                Explore Properties <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline" id="hero-consult-btn">
                Free Consultation
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ pointerEvents: 'auto' }}
          >
            {stats.map((stat, i) => (
              <motion.div className="hero__stat" key={i} variants={fadeInUp}>
                <span className="hero__stat-number">{stat.number}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services section-padding" id="services-section">
        <div className="container">
          <motion.div
            className="services__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Everything you need to create, find, and elevate your perfect living space.
            </p>
          </motion.div>
          <motion.div
            className="services__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link to={service.link} className="service-card" id={`service-card-${i}`}>
                  <div className="service-card__icon">{service.icon}</div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                  <span className="service-card__link">
                    Learn More <FiArrowRight />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="about-preview section-padding" id="about-preview-section">
        <div className="container about-preview__grid">
          <motion.div
            className="about-preview__images"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about-preview__img-main">
              <img src="/images/construction.png" alt="Construction site" />
            </div>
            <motion.div
              className="about-preview__img-float"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src="/images/interior-living.png" alt="Interior design" />
            </motion.div>
            <div className="about-preview__badge">
              <FiAward />
              <span>Award Winning</span>
            </div>
          </motion.div>
          <motion.div
            className="about-preview__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Why Choose Us</motion.span>
            <motion.h2 className="section-title" variants={fadeInUp}>Right Property to Right Customer</motion.h2>
            <motion.p className="about-preview__text" variants={fadeInUp}>
              With years of experience, Nagarjuna Estates has established itself as a trusted name in
              construction and design. We combine innovative techniques with traditional craftsmanship
              to deliver projects that exceed expectations.
            </motion.p>
            <motion.ul className="about-preview__features" variants={staggerContainer}>
              {features.map((feature, i) => (
                <motion.li key={i} variants={fadeInUp}>
                  <FiCheckCircle className="about-preview__check" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeInUp}>
              <Link to="/about" className="btn btn-dark" id="about-preview-btn">
                More About Us <FiArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="featured section-padding" id="featured-section">
        <div className="container">
          <motion.div
            className="featured__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div>
              <span className="section-label">Featured Projects</span>
              <h2 className="section-title">Our Latest Work</h2>
            </div>
            <Link to="/properties" className="btn btn-dark" id="featured-view-all-btn">
              View All Projects <FiArrowRight />
            </Link>
          </motion.div>
          <motion.div
            className="featured__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="featured__card featured__card--large" variants={fadeInUp} id="featured-card-0">
              <img src="/images/hero-house.png" alt="Modern luxury villa" />
              <div className="featured__card-overlay">
                <span className="featured__card-tag">Residential</span>
                <h3>Modern Luxury Villa</h3>
                <p>5 BHK · 4,500 sq ft · Hyderabad</p>
              </div>
            </motion.div>
            <motion.div className="featured__card" variants={fadeInUp} id="featured-card-1">
              <img src="/images/interior-kitchen.png" alt="Contemporary kitchen" />
              <div className="featured__card-overlay">
                <span className="featured__card-tag">Interior</span>
                <h3>Contemporary Kitchen</h3>
                <p>Full Kitchen Renovation</p>
              </div>
            </motion.div>
            <motion.div className="featured__card" variants={fadeInUp} id="featured-card-2">
              <img src="/images/house-sale.png" alt="Suburban family home" />
              <div className="featured__card-overlay">
                <span className="featured__card-tag">For Sale</span>
                <h3>Premium Family Home</h3>
                <p>4 BHK · 3,200 sq ft · Secunderabad</p>
              </div>
            </motion.div>
            <motion.div className="featured__card" variants={fadeInUp} id="featured-card-3">
              <img src="/images/interior-bedroom.png" alt="Master bedroom design" />
              <div className="featured__card-overlay">
                <span className="featured__card-tag">Interior</span>
                <h3>Master Bedroom Suite</h3>
                <p>Luxury Bedroom Design</p>
              </div>
            </motion.div>
            <motion.div className="featured__card featured__card--wide" variants={fadeInUp} id="featured-card-4">
              <img src="/images/construction.png" alt="Commercial project" />
              <div className="featured__card-overlay">
                <span className="featured__card-tag">Construction</span>
                <h3>Commercial Complex</h3>
                <p>120,000 sq ft · Mixed Use Development</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials section-padding" id="testimonials-section">
        <div className="container">
          <motion.div
            className="testimonials__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our valued clients have to say about their experience with Nagarjuna Estates.
            </p>
          </motion.div>
          <motion.div
            className="testimonials__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {testimonials.map((t, i) => (
              <motion.div className="testimonial-card" key={i} variants={fadeInUp} id={`testimonial-card-${i}`}>
                <FaQuoteLeft className="testimonial-card__quote" />
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__stars">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <FiStar key={j} className="testimonial-card__star" />
                  ))}
                </div>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="testimonial-card__name">{t.name}</h4>
                    <span className="testimonial-card__role">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process section-padding" id="process-section">
        <div className="container">
          <motion.div
            className="process__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Our Simple Process</h2>
            <p className="section-subtitle">
              We've streamlined our workflow to give you the best experience from start to finish.
            </p>
          </motion.div>
          <motion.div
            className="process__steps"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your vision, requirements, and budget. We listen carefully to understand your dream.' },
              { step: '02', title: 'Design & Plan', desc: 'Our architects create detailed plans and 3D blueprints for your approval.' },
              { step: '03', title: 'Build & Execute', desc: 'Expert craftsmen bring the plans to life with precision and quality materials.' },
              { step: '04', title: 'Deliver & Support', desc: 'Final walkthrough, handover, and ongoing support for complete peace of mind.' },
            ].map((item, i) => (
              <motion.div className="process__step" key={i} variants={fadeInUp} id={`process-step-${i}`}>
                <span className="process__step-number">{item.step}</span>
                <h3 className="process__step-title">{item.title}</h3>
                <p className="process__step-desc">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
