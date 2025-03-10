import { Link } from "react-router-dom";
import "./styles/ServGlobal.css";
import { useEffect } from "react";

export default function SustainabilityESG() {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, [])
  return (
    <section className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Sustainability & ESG Advisory</h1>
        <p>
          We help businesses integrate Environmental, Social, and Governance (ESG) 
          principles into their operations, ensuring regulatory compliance, sustainability, 
          and long-term value creation.
        </p>
      </div>

      {/* Content Section: Image & Key Features */}
      <div className="content-container">
        {/* Image Section */}
        <div className="service-image">
          <img src="/assets/3.jpg" alt="Sustainability & ESG Advisory" />
        </div>

        {/* Key Features Section */}
        <div className="service-content">
          <h2>Key Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>ESG Strategy Development & Implementation</h3>
              <p>We develop custom ESG frameworks for businesses. Aligning sustainability goals with global ESG best practices.</p>
            </div>
            <div className="service-item">
              <h3>ESG Compliance & Reporting Frameworks</h3>
              <p>We ensure compliance with international and regional ESG regulations. Providing ESG reporting and impact assessment tools.</p>
            </div>
            <div className="service-item">
              <h3>Sustainable Finance Solutions (Green Bonds & Impact Investing)</h3>
              <p>We develop green finance models, including green bonds and ESG investments. Advising on sustainable financing mechanisms for investors.</p>
            </div>
            <div className="service-item">
              <h3>Climate Risk Assessment & Mitigation Planning</h3>
              <p>Identifying climate-related risks affecting businesses. Developing climate adaptation strategies for resilience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="ctabutt">
        <Link to="/service-cta?service=Sustainability" className="btn btn-primary">Get ESG Consultation</Link>
      </div>
    </section>
  );
}
