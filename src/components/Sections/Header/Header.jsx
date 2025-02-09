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
            BOYHOM
          </a>

          {/* Десктопне меню */}
          <ul className="desktop-menu">
            <li>
              <a className="our-menu-link" href="#hero">
                Головна
              </a>
            </li>
            <li>
              <a className="our-menu-link" href="#about">
                Про нас
              </a>
            </li>
            <li>
              <a className="our-menu-link" href="#catalog">
                Каталог
              </a>
            </li>
            <li>
              <a className="our-menu-link" href="#home">
                Ціни
              </a>
            </li>
            <li>
              <a className="our-menu-link" href="#contacts">
                Контакти
              </a>
            </li>
            <li>
              <a className="our-menu-link" href="#contacts">
                Відгуки
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
