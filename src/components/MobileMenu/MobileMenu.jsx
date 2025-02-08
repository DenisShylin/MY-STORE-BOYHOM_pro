import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu__content">
        <ul className="mobile-menu__list">
          <li>
            <a href="#hero" onClick={onClose}>
              Головна
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={onClose}>
              Ціни
            </a>
          </li>
          <li>
            <a href="#catalog" onClick={onClose}>
              Каталог
            </a>
          </li>
          <li>
            <a href="#about" onClick={onClose}>
              Про нас
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onClose}>
              Контакти
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
