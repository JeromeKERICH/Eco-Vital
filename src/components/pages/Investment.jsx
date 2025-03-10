import { Link } from "react-router-dom";
import "./styles/ServGlobal.css";
import { useEffect } from "react";

export default function InvestmentAdvisory() {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, [])
  return (
    <section className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Investment & Financial Advisory</h1>
        <p>
        We recognize that securing investment and financial stability is critical for businesses looking to expand, scale, or innovate. 
        Our Investment & Financial Advisory services are designed to help businesses navigate the complexities of funding, financial structuring, and investor partnerships to achieve long-term sustainable growth.
        </p>
      </div>

      {/* Content Section: Image & Key Features */}
      <div className="content-container">
        {/* Image Section */}
        <div className="service-image">
          <img src="/assets/2.jpg" alt="Investment & Financial Advisory" />
        </div>

        {/* Key Features Section */}
        <div className="service-content">
          <h2>Key Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>Investor Readiness Assessments</h3>
              <p>We Evaluate businesses for investment readiness. Identifying potential funding sources and strategic investors.</p>
            </div>
            <div className="service-item">
              <h3>Capital Raising & Deal Structuring</h3>
              <p>We Assist businesses in securing funding through debt, equity, and blended finance. Providing Structured deals for optimal financial outcomes and investor confidence.</p>
            </div>
            <div className="service-item">
              <h3>Financial Modeling & Valuation</h3>
              <p>We Develop detailed financial models for decision-making. Providing business valuation reports for investors and stakeholders.</p>
            </div>
            <div className="service-item">
              <h3>Impact Investing Strategies</h3>
              <p>We Align investment strategies with social and environmental impact goals. Developing ESG-focused investment models for sustainability-conscious investors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="ctabutt">
        <Link to="/service-cta?service=Investment" className="btn btn-primary">Get Investment Guidance</Link>
      </div>
    </section>
  );
}
