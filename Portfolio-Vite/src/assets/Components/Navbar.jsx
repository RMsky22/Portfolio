// Navbar.jsx
import { useState } from 'react';


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Placeholder */}
        <div className="logo">
          <a href="/" onClick={closeMobileMenu}>
            <span className="logo-text">Rijaal</span>
            <span className="logo-dot">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</a>
            <a href="#projects" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</a>
            <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About</a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;