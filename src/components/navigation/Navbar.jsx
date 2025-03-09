import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
          ECO-VITAL <span>Consulting</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>

        
        
          <Link to="/services" onClick={closeMenu}>
            Services 
          </Link>
        

        
        <Link to="/contactpage" onClick={closeMenu}>Contact</Link>
        <Link to="teammembers" onClick={closeMenu}>Our Team</Link>

        {/* CTA Button */}
        <a href="#" className="call-us" onClick={closeMenu}>
        Request Info
        </a>

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
