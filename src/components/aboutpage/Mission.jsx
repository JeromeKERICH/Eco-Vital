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
          To be the foremost catalyst for
          sustainable business transformation
          and impact-driven investment in
          Africa. We envision a future where
          businesses thrive through
          responsible and innovative practices,
          creating lasting economic, social,
          and environmental value.
          </p>
        </div>
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
          To empower enterprises, investors,
          and organizations by providing
          cutting-edge advisory services that
          integrate sustainability, investment
          facilitation, and business
          transformation. Through strategic
          partnerships, tailored solutions, and
          knowledge-sharing, we enable our
          clients to achieve measurable
          impact and long-term success in the
          evolving African business landscape
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