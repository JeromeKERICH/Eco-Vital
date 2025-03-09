import { FaBusinessTime, FaMoneyBillWave, FaLeaf, FaChalkboardTeacher, FaGlobe, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Services.css";

const servicesData = [
  {
    id: 1,
    icon: <FaBusinessTime className="service-icon" />,
    title: "Strategic Business Advisory",
    description: "Helping businesses refine strategies for sustainable growth and profitability.",
    link: "/strategic-advisory",
  },
  {
    id: 2,
    icon: <FaMoneyBillWave className="service-icon" />,
    title: "Investment & Financial Consulting",
    description: "Guiding businesses on funding, investment planning, and financial risk management.",
    link: "/investment-advisory",
  },
  {
    id: 3,
    icon: <FaLeaf className="service-icon" />,
    title: "Sustainability & ESG Advisory",
    description: "Supporting companies in integrating sustainability and ESG compliance.",
    link: "/sustainability-esg",
  },
  {
    id: 4,
    icon: <FaChalkboardTeacher className="service-icon" />,
    title: "Training & Capacity Building",
    description: "Providing tailored training to enhance leadership and operational efficiency.",
    link: "/training-capacity",
  },
  {
    id: 5,
    icon: <FaGlobe className="service-icon" />,
    title: "Market Entry & Expansion Strategy",
    description: "Assisting companies in navigating new markets and regulatory landscapes.",
    link: "/market-expansion",
  }
];

const Services = () => {
  return (
    <section className="services">
      <h1>Our Services</h1>
      <div className="services-container">
        {servicesData.map(service => (
          <div className="service-card" key={service.id}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="learn">
              Learn More <FaArrowRight className="arrow-icon" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
