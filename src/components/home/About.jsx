import "./styles/AboutUs.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="container">
        {/* Content */}
        <div className="who-content">
          <h2>Who We Are</h2>
          <p>
            Eco-Vital Consulting Group empowers businesses, investors, and
            organizations to unlock Africa’s economic potential. Through
            strategic advisory, investment facilitation, and sustainability
            consulting, we drive growth and impact, helping our clients
            navigate opportunities in emerging markets.
          </p>
        <Link to="about" className="learn-more">
            Learn More <FaArrowRight className="arrow-icon" />
        </Link>
        </div>

        {/* Image */}
        <div className="who-image">
          <img src="/assets/about.jpg" alt="Who We Are" />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre