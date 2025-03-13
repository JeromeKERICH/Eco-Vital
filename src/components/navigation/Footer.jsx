import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-col">
          <h3>Eco-Vital Consulting</h3>
          <p>
            Helping businesses, investors, and organizations unlock Africa’s
            economic potential through strategic advisory, investment
            facilitation, and sustainability consulting.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/servicespage">Services</Link></li>
            <li><Link to="/contactpage">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
           
            <a href="https://www.linkedin.com/company/eco-vital-group/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/profile.php?!d=61573808383427" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Eco-Vital Consulting. All rights reserved. Designed & Maintained by <a href="https://trichenest.com">Triche Nest</a></p>
      </div>
    </footer>
  );
}

export default Footer;