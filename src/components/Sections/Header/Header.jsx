import { useState, useEffect } from "react";
import MobileMenu from "../../MobileMenu/MobileMenu";
import CartModal from "../../Modal/CartModal/CartModal";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

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

          <button className="cart-btn" onClick={openCart}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>

          {/* Бургер кнопка */}
          <button className="burger-btn" onClick={toggleMenu}>
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      <CartModal isOpen={isCartOpen} onClose={closeCart} cartItems={[]} />
    </>
  );
};

export default Header;
