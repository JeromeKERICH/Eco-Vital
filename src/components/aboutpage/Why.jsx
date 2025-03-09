import { FaGlobeAfrica, FaIndustry, FaTrophy, FaLeaf, FaChartLine } from "react-icons/fa";
import "./styles/Why.css";

const highlights = [
  { id: 1, name: "Pan-African Network", icon: <FaGlobeAfrica />, description: "We leverage extensive regional connections to create meaningful business opportunities." },
  { id: 2, name: "Deep Industry Expertise", icon: <FaIndustry />, description: "Our team has decades of combined experience across diverse industries." },
  { id: 3, name: "Proven Impact & Success", icon: <FaTrophy />, description: "We have a track record of delivering transformative results for businesses and investors." },
  { id: 4, name: "Impact-Driven Approach", icon: <FaChartLine />, description: "We ensure every strategy delivers measurable economic and social benefits." },
  { id: 5, name: "Commitment to Sustainability", icon: <FaLeaf />, description: "Sustainability is at the core of everything we do, ensuring long-term value." }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="highlights-grid">
        {highlights.map((item) => (
          <div className="highlight-card" key={item.id}>
            <div className="icon">{item.icon}</div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
