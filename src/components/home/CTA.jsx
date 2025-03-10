import { FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Let's Drive Sustainable Growth Together</h2>
        <p>Partner with Eco-Vital Consulting to unlock impactful business opportunities and sustainable investments.</p>
        <div className="cta-buttons">
          <Link to="/contactpage" className="btn btn-secondary">
            <FaEnvelope className="btn-icon" /> Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

