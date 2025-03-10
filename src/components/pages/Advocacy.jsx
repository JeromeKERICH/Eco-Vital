import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./styles/ServGlobal.css";

export default function AdvocacyServices() {
        
      
     useEffect(() => {
                window.scrollTo(0, 0);
            }, [])

            
  return (

    <section className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Advocacy Services (Women & Youth)</h1>
        <p>
          We are dedicated to empowering women and youth by advocating for inclusive policies, 
          equitable opportunities, and sustainable development initiatives that foster social and economic empowerment.
        </p>
      </div>

      {/* Content Section: Image & Key Features */}
      <div className="content-container">
        {/* Image Section */}
        <div className="service-image">
          <img src="/assets/adv.jpg" alt="Advocacy Services (Women & Youth)" />
        </div>

        {/* Key Features Section */}
        <div className="service-content">
          <h2>Key Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>Women & Youth Economic Empowerment</h3>
              <p>Facilitating access to entrepreneurship opportunities, financial resources, and training programs.</p>
            </div>
            <div className="service-item">
              <h3>Policy Advocacy & Rights Awareness</h3>
              <p>Engaging policymakers to promote gender equality and youth inclusion in economic and social policies.</p>
            </div>
            <div className="service-item">
              <h3>Leadership & Capacity Development</h3>
              <p>Providing mentorship, networking opportunities, and leadership training to equip young leaders and female entrepreneurs.</p>
            </div>
            <div className="service-item">
              <h3>Social Impact Initiatives</h3>
              <p>Implementing community-driven programs that foster education, job creation, and social well-being for women and youth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="ctabutt">
        <Link to="/contact" className="btn btn-primary">Join Our Advocacy Network</Link>
      </div>

    
    </section>


  );
}
