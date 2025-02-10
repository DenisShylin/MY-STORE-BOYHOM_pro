import { useEffect } from "react";
import {
  Gamepad2,
  Laptop2,
  PlayCircle,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
    setTimeout(() => {
      document.body.style.overflow = "unset";
    }, 300);
  };

  const menuItems = [
    {
      id: 1,
      icon: <Gamepad2 size={24} />,
      text: "Возможности",
      href: "#features-r36s",
    },
    {
      id: 2,
      icon: <Laptop2 size={24} />,
      text: "Про R36S",
      href: "#features",
    },
    {
      id: 3,
      icon: <PlayCircle size={24} />,
      text: "Видео",
      href: "#categories",
    },
    {
      id: 4,
      icon: <MessageCircle size={24} />,
      text: "Отзывы",
      href: "#reviews",
    },
    {
      id: 5,
      icon: <PhoneCall size={24} />,
      text: "Контакты",
      href: "#contact",
    },
  ];

  const getCurrentSection = () => {
    const sections = menuItems.map((item) => ({
      id: item.id,
      href: item.href,
      top: document.querySelector(item.href)?.offsetTop || 0,
    }));

    const scrollPosition = window.scrollY + 100;

    const currentSection = sections.reduce((prev, curr) => {
      return Math.abs(curr.top - scrollPosition) <
        Math.abs(prev.top - scrollPosition)
        ? curr
        : prev;
    });

    return currentSection.href;
  };

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu__background"></div>
      <div className="mobile-menu__container">
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__list">
            {menuItems.map((item) => (
              <li key={item.id} className="mobile-menu__item">
                <a
                  href={item.href}
                  className={`mobile-menu__link ${
                    getCurrentSection() === item.href ? "active" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  <span className="mobile-menu__icon">{item.icon}</span>
                  <span className="mobile-menu__link-text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__footer">
          © 2024 BOYHOM. Все права защищены.
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
