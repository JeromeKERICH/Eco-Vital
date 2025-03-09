import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./styles/Team.css";

const teamMembers = [
  {
    id: 1,
    name: "Elizabeth Nasaka",
    role: "Managing Director",
    image: "/assets/liza.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "mailto:johndoe@example.com"
  },
  {
    id: 2,
    name: "Timothy Ngige",
    role: "Project Development Partner",
    image: "/assets/tim.jpg",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    email: "mailto:janesmith@example.com"
  },
  {
    id: 3,
    name: "Kelvin Smile",
    role: "Communication & Media Relations",
    image: "/assets/kev.jpg",
    linkedin: "https://linkedin.com/in/michaelbrown",
    twitter: "https://twitter.com/michaelbrown",
    email: "mailto:michaelbrown@example.com"
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
              <a href={member.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href={member.email}><FaEnvelope /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
