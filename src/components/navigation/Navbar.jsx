import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import Phone Input CSS
import { Link } from "react-router-dom";
import "./styles/Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requestType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors when typing
  };

  // Handle Phone Number Change
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    setErrors({ ...errors, phone: "" }); // Clear phone error
  };

  // Validate Form Before Submission
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length < 7 || formData.phone.length > 15) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.requestType) newErrors.requestType = "Please select a request type.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    emailjs.send(
      "service_6nn1wde", // Replace with your EmailJS Service ID
      "template_2u6meap", // Replace with your EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone, // Formatted phone number
        requestType: formData.requestType,
        message: formData.message,
      },
      "rfhgx4MoqlQ9cFEWV" // Replace with your EmailJS Public Key
    )
    .then(() => {
      alert("Your request has been sent successfully!");
      setShowForm(false);
      setFormData({ name: "", email: "", phone: "", requestType: "", message: "" }); // Reset Form
      setIsSubmitting(false);
    })
    .catch(() => {
      alert("Failed to send your request. Please try again.");
      setIsSubmitting(false);
    });
  };


 

  useEffect(() => {
    // Detect screen size
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };


  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <h1>
          <img src="assets/ecologo.png" alt="Eco-Vital Consulting" />
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>

        
        
          <Link to="/servicespage" onClick={closeMenu}>
            Services 
          </Link>
        

          <Link to="teammembers" onClick={closeMenu}>Our Team</Link>
        <Link to="/contactpage" onClick={closeMenu}>Contact</Link>
        

        <a href="#" className="call-us" onClick={(e) => { e.preventDefault(); setShowForm(true); }}>
        Request Info
      </a>

      {showForm && (
        <div className="modal">
          <div className="modal-content animate-modal">
            <h2>Request More Info</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}

              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}

              {/* Phone Number with Country Code */}
              

              {/* Dropdown Selection for Info Request */}
              <select name="requestType" value={formData.requestType} onChange={handleChange}>
                <option value="">Select Information Type</option>
                <option value="Business Advisory">Business Advisory</option>
                <option value="Investment & Financial Consulting">Investment & Financial Consulting</option>
                <option value="Sustainability & ESG Advisory">Sustainability & ESG Advisory</option>
                <option value="Training & Capacity Building">Training & Capacity Building</option>
                <option value="Market Expansion Strategy">Market Expansion Strategy</option>
                <option value="Other">Other</option>
              </select>
              {errors.requestType && <span className="error">{errors.requestType}</span>}

              <PhoneInput
                country={"ke"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{ name: "phone", required: true }}
                containerClass="phone-input-container"
                inputClass="phone-input-field"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <textarea name="message" placeholder="Additional Details (Optional)" rows="4" value={formData.message} onChange={handleChange}></textarea>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </form>
            <button className="close-btn" onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar rotate1" : "bar"}></div>
        <div className={menuOpen ? "bar hide" : "bar"}></div>
        <div className={menuOpen ? "bar rotate2" : "bar"}></div>
      </div>
    </header>
  );
};

export default Navbar;
