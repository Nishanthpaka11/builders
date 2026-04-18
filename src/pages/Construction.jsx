import { FiCheckCircle, FiTool, FiHome, FiSettings, FiTruck, FiClipboard, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Construction.css';

const constructionServices = [
  {
    icon: <FiHome />,
    title: 'Residential Construction',
    desc: 'Custom homes, villas, townhouses, and apartment complexes built to your exact specifications.',
  },
  {
    icon: <FiSettings />,
    title: 'Commercial Buildings',
    desc: 'Office buildings, retail spaces, warehouses, and mixed-use developments with modern infrastructure.',
  },
  {
    icon: <FiTool />,
    title: 'Renovation & Remodeling',
    desc: 'Transform existing spaces with structural modifications, additions, and complete overhauls.',
  },
  {
    icon: <FiClipboard />,
    title: 'Project Management',
    desc: 'End-to-end project planning, budgeting, scheduling, and quality control services.',
  },
  {
    icon: <FiTruck />,
    title: 'Site Development',
    desc: 'Land clearing, grading, excavation, and complete site preparation for new builds.',
  },
  {
    icon: <FiShield />,
    title: 'Quality Assurance',
    desc: 'Rigorous material testing, structural inspections, and code compliance verification.',
  },
];

const projects = [
  { img: '/images/hero-house.png', title: 'Oceanview Residence', location: 'Malibu, CA', type: 'Residential', sqft: '6,200' },
  { img: '/images/construction.png', title: 'Metro Business Park', location: 'Chicago, IL', type: 'Commercial', sqft: '45,000' },
  { img: '/images/house-sale.png', title: 'Greenfield Estates', location: 'Austin, TX', type: 'Residential', sqft: '3,800' },
];

const Construction = () => {
  return (
    <main className="construction-page" id="construction-page">
      {/* Hero */}
      <section className="page-hero" id="construction-hero">
        <div className="page-hero__bg">
          <img src="/images/construction.png" alt="Construction" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">

          <h1 className="page-hero__title">Building Structures<br />That Stand the Test of Time</h1>
          <p className="page-hero__subtitle">
            From foundation to finish, our expert team delivers exceptional construction services
            with precision, quality, and unwavering commitment to your vision.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="construction-services section-padding" id="construction-services">
        <div className="container">
          <div className="construction-services__header">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Comprehensive Construction Solutions</h2>
            <p className="section-subtitle">
              We offer a full range of construction services, from initial planning to final handover.
            </p>
          </div>
          <div className="construction-services__grid">
            {constructionServices.map((s, i) => (
              <div className="construction-service-card" key={i} id={`construction-service-${i}`}>
                <div className="construction-service-card__icon">{s.icon}</div>
                <h3 className="construction-service-card__title">{s.title}</h3>
                <p className="construction-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="construction-process section-padding" id="construction-process">
        <div className="container">
          <div className="construction-process__grid">
            <div className="construction-process__content">
              <span className="section-label">Our Approach</span>
              <h2 className="section-title">How We Build</h2>
              <p className="construction-process__text">
                Our construction process is designed to keep you informed and involved at every stage.
                We believe transparency and communication are the foundations of great builds.
              </p>
              <div className="construction-process__steps">
                {[
                  { num: '01', title: 'Discovery & Planning', desc: 'We assess your needs, site conditions, and budget to create a detailed project roadmap.' },
                  { num: '02', title: 'Design & Engineering', desc: 'Our architects and engineers create detailed blueprints, 3D models, and structural plans.' },
                  { num: '03', title: 'Permitting & Approvals', desc: 'We handle all regulatory requirements, permits, and compliance documentation.' },
                  { num: '04', title: 'Construction & Delivery', desc: 'Expert teams execute the build with regular progress updates and quality checks.' },
                ].map((step, i) => (
                  <div className="construction-process__step" key={i}>
                    <span className="construction-process__step-num">{step.num}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="construction-process__image">
              <img src="/images/construction.png" alt="Construction process" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="construction-projects section-padding" id="construction-projects">
        <div className="container">
          <div className="construction-projects__header">
            <span className="section-label">Our Portfolio</span>
            <h2 className="section-title">Recent Construction Projects</h2>
          </div>
          <div className="construction-projects__grid">
            {projects.map((p, i) => (
              <div className="construction-project-card" key={i} id={`construction-project-${i}`}>
                <div className="construction-project-card__img">
                  <img src={p.img} alt={p.title} />
                  <span className="construction-project-card__type">{p.type}</span>
                </div>
                <div className="construction-project-card__content">
                  <h3>{p.title}</h3>
                  <p className="construction-project-card__location">{p.location}</p>
                  <p className="construction-project-card__sqft">{p.sqft} sq ft</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="construction-cta section-padding" id="construction-cta">
        <div className="container construction-cta__inner">
          <h2 className="construction-cta__title">Have a Construction Project in Mind?</h2>
          <p className="construction-cta__text">
            Get a free consultation and quote from our construction experts.
          </p>
          <Link to="/contact" className="btn btn-primary" id="construction-cta-btn">
            Request Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Construction;
