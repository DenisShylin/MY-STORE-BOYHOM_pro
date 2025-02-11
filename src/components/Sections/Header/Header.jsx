import { useState, useEffect } from "react";
import MobileMenu from "../../MobileMenu/MobileMenu";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* Десктопне меню */}
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

          {/* Бургер кнопка */}
          <button className="burger-btn" onClick={toggleMenu}>
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;
