import { useEffect } from "react";
import "./styles/Story.css";

const CompanyStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="company-story">
      <div className="container">
        {/* Content Section */}
        <div className="story-content">
          <h2>About Us</h2>
          <p>
            Eco-Vital Consulting Group was created to bridge the gap between 
            business opportunities and sustainable economic growth. Our goal 
            is to empower enterprises and investors by integrating ESG principles 
            into business strategy.
            <br/>
            <br/>
            At Eco-Vital, we believe that responsible business practices lead to 
            long-term profitability. Our team of experts collaborates with organizations 
            to develop innovative solutions that drive both financial success and 
            societal benefit.
          </p>
        </div>

        {/* Image Section */}
        <div className="story-image">
          <img src="/assets/about2.jpg" alt="Ec0-Vital" />
        </div>
      </div>
    </section>
  );
}

export default CompanyStory;