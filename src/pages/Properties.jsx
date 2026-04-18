import { useState } from 'react';
import { FiMapPin, FiMaximize, FiGrid, FiDollarSign, FiSearch, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Properties.css';

const allProperties = [
  {
    id: 1, img: '/images/hero-house.png', title: 'Skyline Modern Villa',
    location: 'Manhattan, New York', price: '$2,450,000', beds: 5, baths: 4, sqft: '4,500',
    type: 'Villa', status: 'For Sale',
  },
  {
    id: 2, img: '/images/house-sale.png', title: 'Greenfield Family Home',
    location: 'Greenwich, Connecticut', price: '$1,200,000', beds: 4, baths: 3, sqft: '3,200',
    type: 'House', status: 'For Sale',
  },
  {
    id: 3, img: '/images/interior-living.png', title: 'Urban Luxe Apartment',
    location: 'Brooklyn, New York', price: '$850,000', beds: 3, baths: 2, sqft: '1,800',
    type: 'Apartment', status: 'For Sale',
  },
  {
    id: 4, img: '/images/interior-kitchen.png', title: 'The Pinnacle Penthouse',
    location: 'Miami Beach, Florida', price: '$3,800,000', beds: 4, baths: 4, sqft: '5,200',
    type: 'Penthouse', status: 'For Sale',
  },
  {
    id: 5, img: '/images/interior-bedroom.png', title: 'Sunrise Estate',
    location: 'Beverly Hills, California', price: '$5,200,000', beds: 6, baths: 5, sqft: '7,000',
    type: 'Villa', status: 'Sold',
  },
  {
    id: 6, img: '/images/construction.png', title: 'Midtown Residences',
    location: 'Austin, Texas', price: '$650,000', beds: 3, baths: 2, sqft: '2,100',
    type: 'House', status: 'For Sale',
  },
];

const filters = ['All', 'Villa', 'House', 'Apartment', 'Penthouse'];

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = allProperties.filter((p) => {
    const matchFilter = activeFilter === 'All' || p.type === activeFilter;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <main className="properties-page" id="properties-page">
      {/* Hero */}
      <section className="page-hero" id="properties-hero">
        <div className="page-hero__bg">
          <img src="/images/house-sale.png" alt="Properties" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">

          <h1 className="page-hero__title">Find Your<br />Perfect Home</h1>
          <p className="page-hero__subtitle">
            Explore our exclusive collection of homes, villas, and apartments in the most desirable locations.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="properties-filter" id="properties-filter">
        <div className="container">
          <div className="properties-filter__bar">
            <div className="properties-filter__search">
              <FiSearch className="properties-filter__search-icon" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="properties-filter__input"
                id="properties-search-input"
              />
            </div>
            <div className="properties-filter__tags">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`properties-filter__tag ${activeFilter === f ? 'properties-filter__tag--active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                  id={`filter-${f.toLowerCase()}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="properties-listings section-padding" id="properties-listings">
        <div className="container">
          <p className="properties-listings__count">
            Showing <strong>{filteredProperties.length}</strong> properties
          </p>
          <div className="properties-listings__grid">
            {filteredProperties.map((property) => (
              <div className="property-card" key={property.id} id={`property-card-${property.id}`}>
                <div className="property-card__img">
                  <img src={property.img} alt={property.title} />
                  <span className={`property-card__status ${property.status === 'Sold' ? 'property-card__status--sold' : ''}`}>
                    {property.status}
                  </span>
                  <button className="property-card__fav" aria-label="Add to favorites">
                    <FiHeart />
                  </button>
                </div>
                <div className="property-card__content">
                  <div className="property-card__price">{property.price}</div>
                  <h3 className="property-card__title">{property.title}</h3>
                  <p className="property-card__location">
                    <FiMapPin /> {property.location}
                  </p>
                  <div className="property-card__specs">
                    <span><FiGrid /> {property.beds} Beds</span>
                    <span><FiGrid /> {property.baths} Baths</span>
                    <span><FiMaximize /> {property.sqft} sqft</span>
                  </div>
                  <Link to="/contact" className="property-card__link" id={`property-inquire-${property.id}`}>
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {filteredProperties.length === 0 && (
            <div className="properties-empty">
              <p>No properties found matching your criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Properties;
