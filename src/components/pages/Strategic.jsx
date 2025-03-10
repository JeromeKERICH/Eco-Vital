import { Link } from "react-router-dom";
import "./styles/ServGlobal.css";
import { useEffect } from "react";

export default function StrategicAdvisory() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <section className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Strategic Business Advisory</h1>
        <p>
        We understand that businesses today face rapidly evolving markets, shifting consumer demands, and increasing competition. 
        Our Strategic Business Advisory service is designed to equip enterprises with data-driven strategies, actionable insights, and long-term growth plans to thrive in complex business environments.
        </p>
      </div>

      {/* Content Section: Image & Key Features */}
      <div className="content-container">
        {/* Image Section */}
        <div className="service-image">
          <img src="/assets/advis.jpg" alt="Strategic Business Advisory" />
        </div>

        {/* Key Features Section */}
        <div className="service-content">
          <h2>Key Features</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>Business Model Development & Optimization</h3>
              <p>We Assess existing business models and improve efficiency. Developing scalable and resilient strategies aligned with market demands.</p>
            </div>
            <div className="service-item">
              <h3>Market Research & Feasibility Studies</h3>
              <p>We Conduct data-driven market analysis to identify growth opportunities. Providing feasibility studies for new investments and business expansion.</p>
            </div>
            <div className="service-item">
              <h3>Corporate Governance & Risk Management</h3>
              <p>We Implement best practices in governance, compliance, and transparency. Developing risk management frameworks to mitigate business threats.</p>
            </div>
            <div className="service-item">
              <h3>Growth Strategy Formulation & Execution</h3>
              <p>We Design and execute expansion strategies for African markets. Developing roadmaps for scaling startups, SMEs, and enterprises.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="ctabutt">
        <Link to="/service-cta?service=Business Advisory" className="btn btn-primary">Get Expert Advice</Link>
      </div>
    </section>
  );
}
