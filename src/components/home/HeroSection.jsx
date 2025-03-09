import { FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import "./styles/Hero-Section.css";
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div> {/* Gradient Overlay */}
      <div className="hero-content">
        <h1>Investing in Growth, Driving Impact.</h1>
        <p>
          Eco-Vital Consulting Group helps businesses, investors, and
          organizations unlock Africa’s economic potential through strategic
          advisory, investment facilitation, and sustainability consulting.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-main">
            <FaCalendarAlt className="btn-icon" /> Schedule a Consultation
          </button>
          <button className="btn btn-secondary">
            <FaEnvelope className="btn-icon" /> Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
