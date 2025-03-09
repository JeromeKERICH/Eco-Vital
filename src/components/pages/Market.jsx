import { Link } from "react-router-dom";
import "./styles/ServGlobal.css";
import { useEffect } from "react";

export default function MarketExpansion() {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, [])
  return (
    <section className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Training & Capacity Building</h1>
        <p>
        We Help businesses looking to enter or expand into African markets, we provide tailored solutions that cover market intelligence, regulatory guidance, and strategic partnerships to ensure a smooth and successful transition.
        </p>
      </div>

      {/* Content Section: Image & Key Features */}
      <div className="content-container">
        {/* Image Section */}
        <div className="service-image">
          <img src="/assets/5.jpg" alt="Training & Capacity Building" />
        </div>

        {/* Key Features Section */}
        <div className="service-content">
          <h2>Key Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>Market Entry Feasibility Studies</h3>
              <p>We conduct country-specific market research to identify and assess viable opportunities.
              Evaluating economic landscapes and regulatory environments to make informed entry decisions.</p>
            </div>
            <div className="service-item">
              <h3>Regulatory Compliance & Business Registration Support</h3>
              <p>We offer expert guidance on legal and compliance requirements in African countries.
              Assisting businesses with business registration, licensing, and taxation to ensure full compliance.</p>
            </div>
            <div className="service-item">
              <h3>Local Partnership & Stakeholder Engagement</h3>
              <p>We identify key local partners, suppliers, and stakeholders to create valuable business relationships.
              Establishing strategic alliances and engage key decision-makers for business growth.</p>
            </div>
            <div className="service-item">
              <h3>Localization of Business Models for African Markets</h3>
              <p>We adapt business models to meet the needs of African consumers by analyzing local preferences, behaviors, and trends.
              Optimizing pricing, distribution, and branding strategies to align with market expectations and maximize success.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="ctabutt">
        <Link to="/contact" className="btn btn-primary">Start Your Business</Link>
      </div>
    </section>
  );
}
