import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./styles/Contact.css";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setError("");

    emailjs.send(
      "service_6nn1wde",  // Replace with your EmailJS Service ID
      "template_ak3cp6h", // Replace with your EmailJS Template ID
      formData,
      "rfhgx4MoqlQ9cFEWV"   // Replace with your EmailJS Public Key
    )
    .then((response) => {
      console.log("Email sent successfully:", response);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      setError("Failed to send message. Please try again.");
    });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach out for inquiries, partnerships, or consultations.</p>

          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Nairobi, Kenya</p>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <p>+254 712 345 678</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>info@ecovital.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          {isSent && <p className="success-message">Your message has been sent successfully!</p>}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
