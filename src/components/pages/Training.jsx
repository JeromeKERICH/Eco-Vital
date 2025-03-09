import { Link } from "react-router-dom";
import "./styles/ServGlobal.css";
import { useEffect } from "react";

export default function TrainingCapacity() {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, [])
  return (
    <section className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Training & Capacity Building</h1>
        <p>
          We offer specialized training programs to equip executives, policymakers, and 
          entrepreneurs with the skills and knowledge needed for success in sustainability, 
          finance, and strategy.
        </p>
      </div>

      {/* Content Section: Image & Key Features */}
      <div className="content-container">
        {/* Image Section */}
        <div className="service-image">
          <img src="/assets/4.jpg" alt="Training & Capacity Building" />
        </div>

        {/* Key Features Section */}
        <div className="service-content">
          <h2>Key Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>ESG Compliance Training for Leadership Teams</h3>
              <p>We educate executives on global ESG regulations and best practices. Ensuring businesses stay ahead of compliance requirements.</p>
            </div>
            <div className="service-item">
              <h3>Leadership & Management Training</h3>
              <p>We develop strategic leadership skills for business growth. Equiping executives with decision-making frameworks for success.</p>
            </div>
            <div className="service-item">
              <h3>Financial Management & Investment Training</h3>
              <p>We train businesses on financial literacy, budgeting, and investment strategies. Providing risk assessment and capital raising techniques.</p>
            </div>
            <div className="service-item">
              <h3>Market Research & Feasibility Training</h3>
              <p>We teach professionals how to conduct effective market research. Helping businesses analyze market trends for expansion.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="ctabutt">
        <Link to="/contact" className="btn btn-primary">Enroll in Training</Link>
      </div>
    </section>
  );
}
