import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./styles/Team.css";

const teamMembers = [
  {
    id: 1,
    name: "Elizabeth Nasaka",
    role: "Managing Director",
    image: "/assets/lizaa.jpg",
    linkedin: "https://www.linkedin.com/in/elizabeth-nasaka-276a25100?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:liza@ecovitalconsulting.com"
  },
  {
    id: 2,
    name: "Timothy Ngige",
    role: "Project Development Partner",
    image: "/assets/tim.jpg",
    linkedin: "https://www.linkedin.com/in/timothy-ngige?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:timothyngige@gmail.com"
  },
  {
    id: 3,
    name: "Kelvin Smile",
    role: "Communication & Media Relations",
    image: "/assets/kev.jpg",
    linkedin: "https://www.linkedin.com/in/kelvin-kiptoo-communications-strategist/",
    email: "mailto:youngkelvins@gmail.com"
  },

  {
    id: 4,
    name: "Dorothy Dottie Liech",
    role: "Investment Partner",
    image: "/assets/dorot.jpg",
    link: "https://www.linkedin.com/in/dorothy-dottie-liech-31125440/",
    email: "mailto:dorothy@ecovitalconsulting.com"
  }
];

export default function Team() {
  return (
    <section className="team">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="team-social">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={member.email}><FaEnvelope /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
