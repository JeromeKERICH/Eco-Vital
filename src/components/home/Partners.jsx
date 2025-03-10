import "./styles/Partners.css";
import { FaChartLine, FaDollarSign, FaGlobe } from "react-icons/fa";
import CountUp from "react-countup";


const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="impact-stats">
        <h2>Our Impact</h2>
        <div className="impact-grid">
          <div className="impact-item">
            <FaChartLine className="impact-icon" />
            <h3><CountUp end={10} duration={3} />+</h3>
            <p>High-impact investments facilitated</p>
          </div>
          <div className="impact-item">
            <FaDollarSign className="impact-icon" />
            <h3><CountUp end={10} duration={3} />M+</h3>
            <p>Sustainable investments managed</p>
          </div>
          <div className="impact-item">
            <FaGlobe className="impact-icon" />
            <h3><CountUp end={25} duration={3} />+</h3>
            <p>Businesses supported in emerging markets</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection