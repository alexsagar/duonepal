import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowRight, HiX } from 'react-icons/hi';
import '../styles/Navbar.css';

const NAVBAR_HEIGHT = 70;

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Offset for hash link scrolling
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -NAVBAR_HEIGHT;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const getNavbarClass = () => {
    if (!isHomePage) return 'navbar navbar-default';
    return isScrolled ? 'navbar navbar-scrolled' : 'navbar';
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <>
      <nav className={getNavbarClass()}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
  <Link to="/" className="logo-link" onClick={closeMobileMenu}>
    <img 
      src="/logo.png" 
      alt="Duo Nepal Logo" 
      className="navbar-logo-img"
      style={{ height: "200px" }} // adjust as needed
    />
  </Link>
</div>


          {/* Desktop Menu */}
          <ul className="navbar-menu desktop-menu">
            <li className="navbar-item">
              <Link smooth to="/#how-it-works" scroll={scrollWithOffset} className="nav-link">
                How it Works
              </Link>
            </li>
            <li className="navbar-item">
              <Link smooth to="/#features" scroll={scrollWithOffset} className="nav-link">
                Features
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/pricing" className={isActiveLink('/pricing')} onClick={closeMobileMenu}>
                Pricing
              </Link>
            </li>
            <li className="navbar-item">
              <Link smooth to="/#faqs" scroll={scrollWithOffset} className="nav-link">
                FAQs
              </Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="navbar-actions desktop-actions">
            <Link to="/book-now" className="navbar-book-now-btn">
              Book Now
              <HiArrowRight className="navbar-arrow-icon" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-close" onClick={closeMobileMenu}>
          <HiX />
        </div>

        <ul className="mobile-navbar-menu">
          <li className="mobile-navbar-item">
            <Link smooth to="/#how-it-works" scroll={scrollWithOffset} className="nav-link" onClick={closeMobileMenu}>
              How it Works
            </Link>
          </li>
          <li className="mobile-navbar-item">
            <Link smooth to="/#features" scroll={scrollWithOffset} className="nav-link" onClick={closeMobileMenu}>
              Features
            </Link>
          </li>
          <li className="mobile-navbar-item">
            <Link to="/pricing" className={isActiveLink('/pricing')} onClick={closeMobileMenu}>
              Pricing
            </Link>
          </li>
          <li className="mobile-navbar-item">
            <Link smooth to="/#faqs" scroll={scrollWithOffset} className="nav-link" onClick={closeMobileMenu}>
              FAQs
            </Link>
          </li>
        </ul>

        <div className="mobile-navbar-actions">
          <Link to="/book-now" className="mobile-navbar-book-now-btn" onClick={closeMobileMenu}>
            Book Now
            <HiArrowRight className="navbar-arrow-icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
