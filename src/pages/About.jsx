import { FiCheckCircle, FiAward, FiTarget, FiHeart, FiUsers, FiTrendingUp, FiShield, FiStar } from 'react-icons/fi';
import './About.css';

const team = [
  { name: 'Robert Chen', role: 'CEO & Founder', initial: 'R' },
  { name: 'Maria Santos', role: 'Lead Architect', initial: 'M' },
  { name: 'David Kim', role: 'Construction Head', initial: 'D' },
  { name: 'Lisa Johnson', role: 'Interior Design Lead', initial: 'L' },
];

const values = [
  { icon: <FiTarget />, title: 'Precision', desc: 'Every detail matters. We ensure millimeter-perfect execution in every project.' },
  { icon: <FiHeart />, title: 'Passion', desc: 'We pour our hearts into every build, treating each project as if it were our own home.' },
  { icon: <FiShield />, title: 'Integrity', desc: 'Transparent pricing, honest timelines, and quality materials — no shortcuts.' },
  { icon: <FiTrendingUp />, title: 'Innovation', desc: 'We embrace cutting-edge techniques and sustainable building practices.' },
];

const milestones = [
  { year: '2005', title: 'Company Founded', desc: 'Started with a small team of passionate builders in a garage.' },
  { year: '2010', title: 'First Major Project', desc: 'Completed a 50-unit residential complex that won regional awards.' },
  { year: '2015', title: 'Interior Division', desc: 'Launched our interior design division to offer end-to-end solutions.' },
  { year: '2020', title: '500+ Projects', desc: 'Crossed the milestone of 500 successfully completed projects.' },
  { year: '2024', title: 'National Recognition', desc: 'Named among Top 50 Construction & Design firms nationally.' },
];

const About = () => {
  return (
    <main className="about-page" id="about-page">
      {/* Hero Banner */}
      <section className="page-hero" id="about-hero">
        <div className="page-hero__bg">
          <img src="/images/construction.png" alt="Construction" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">

          <h1 className="page-hero__title">Building Trust,<br />One Home at a Time</h1>
          <p className="page-hero__subtitle">
            Since 2005, BuildNest has been transforming skylines and living spaces across the nation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story section-padding" id="about-story">
        <div className="container about-story__grid">
          <div className="about-story__content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">From Humble Beginnings to Industry Leaders</h2>
            <p className="about-story__text">
              BuildNest was founded in 2005 by Robert Chen, a civil engineer with a vision to create
              a company that prioritizes quality, transparency, and client satisfaction above everything else.
            </p>
            <p className="about-story__text">
              What started as a small team of five has grown into a dynamic company of over 50 professionals,
              including architects, engineers, interior designers, and project managers. We've completed
              over 500 projects, ranging from cozy family homes to large-scale commercial developments.
            </p>
            <p className="about-story__text">
              Today, BuildNest is a one-stop destination for construction, property sales, and interior
              design services. Our mission remains the same — to build spaces that inspire and endure.
            </p>
          </div>
          <div className="about-story__image">
            <img src="/images/hero-house.png" alt="BuildNest project" />
            <div className="about-story__experience-badge">
              <span className="about-story__experience-number">15+</span>
              <span className="about-story__experience-text">Years of<br />Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section-padding" id="about-values">
        <div className="container">
          <div className="about-values__header">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us Every Day</h2>
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div className="value-card" key={i} id={`value-card-${i}`}>
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline section-padding" id="about-timeline">
        <div className="container">
          <div className="about-timeline__header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones & Achievements</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`} key={i} id={`milestone-${i}`}>
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <span className="timeline__year">{m.year}</span>
                  <h3 className="timeline__title">{m.title}</h3>
                  <p className="timeline__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team section-padding" id="about-team">
        <div className="container">
          <div className="about-team__header">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Meet the People Behind BuildNest</h2>
            <p className="section-subtitle">Our diverse team of experts brings together decades of combined experience in construction, design, and project management.</p>
          </div>
          <div className="about-team__grid">
            {team.map((member, i) => (
              <div className="team-card" key={i} id={`team-card-${i}`}>
                <div className="team-card__avatar">
                  <span>{member.initial}</span>
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
