import { useState, useEffect } from "react";
import MobileMenu from "../../MobileMenu/MobileMenu";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`header ${isScrolled ? "scrolled" : ""} ${
          isMenuOpen ? "menu-open" : ""
        }`}
      >
        <nav className="nav">
          <a href="/" className="logo">
            R36S
          </a>

          <ul className="desktop-menu">
            <li>
              <a className="our-menu-link" href="#features-r36s">
                Functionality
              </a>
            </li>
            <li>
              <a className="our-menu-link" href="#features">
                About R36S
              </a>
            </li>
            <li>
              <a className="our-menu-link" href="#categories">
                Video
              </a>
            </li>
            <li>
              <a className="our-menu-link" href="#reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="our-menu-link" href="#contact">
                Contacts
              </a>
            </li>
          </ul>

          <button
            className="burger-btn"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        isMobile={isMobile}
      />
    </>
  );
};

export default Header;
