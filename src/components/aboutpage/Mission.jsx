import { FaLeaf, FaLightbulb, FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";
import "./styles/Mission.css";

const coreValues = [
  { id: 1, name: "Sustainability", icon: <FaLeaf />, description: "We prioritize environmental and social responsibility in all our strategies." },
  { id: 2, name: "Innovation", icon: <FaLightbulb />, description: "We embrace creativity and forward-thinking solutions." },
  { id: 3, name: "Community", icon: <FaUsers />, description: "We foster collaboration and growth within local and global communities." },
  { id: 4, name: "Integrity", icon: <FaShieldAlt />, description: "We uphold the highest ethical standards in all our engagements." },
  { id: 5, name: "Impact", icon: <FaChartLine />, description: "We drive measurable and long-term change for businesses and society." },
];

const VisionMission = () => {
  return (
    <section className="vision-mission">
      {/* Vision & Mission Section */}
      <div className="vision-mission-content">
        <div className="vision-box">
          <h2>Our Vision</h2>
          <p>
            "To be the foremost catalyst for sustainable business transformation 
            and impact-driven investment in Africa."
          </p>
        </div>
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            "To empower businesses, investors, and organizations with tailored 
            advisory services that drive measurable impact."
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <h2 className="section-title">Our Core Values</h2>
      <div className="core-values-grid">
        {coreValues.map((value) => (
          <div className="core-value-card" key={value.id}>
            <div className="icon">{value.icon}</div>
            <h3>{value.name}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VisionMission