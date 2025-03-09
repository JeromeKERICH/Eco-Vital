import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./styles/Contact.css";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
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
              <p>Nairobi, Kenya
              </p>
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
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
