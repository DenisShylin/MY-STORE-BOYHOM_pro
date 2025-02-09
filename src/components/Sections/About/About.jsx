import { useState } from "react";
import "./About.css";
import ModalAbout from "./ModalAbout/ModalAbout";
import { createPortal } from "react-dom";

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleOpenModal = (feature, e) => {
    e.stopPropagation();
    setSelectedFeature(feature);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
    document.body.style.overflow = "auto";
  };

  const features = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="6" y1="12" x2="10" y2="12"></line>
          <line x1="8" y1="10" x2="8" y2="14"></line>
          <line x1="15" y1="13" x2="15.01" y2="13"></line>
          <line x1="18" y1="11" x2="18.01" y2="11"></line>
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        </svg>
      ),
      title: "Обширная коллекция ретро-игр",
      description:
        "Погрузитесь в ретро-игры с портативной игровой консолью r36s",
      number: "15K+",
      detail: "классических игр",
      fullDescription: `Откройте для себя богатую коллекцию классических игр, включающую более 15,000 тайтлов из разных эпох. От культовых аркад до любимых консольных игр - наша библиотека охватывает все значимые платформы прошлого.

В коллекцию входят:
• Классические аркадные игры 80-х и 90-х
• Полные библиотеки NES, SNES, Sega и других консолей
• Эксклюзивные порты и редкие релизы
• Оптимизированные версии для современного железа`,
      imageUrl: "/src/assets/img/hero/Display_Controls (2).webp",
      imageAlt: "Коллекция ретро-игр",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Яркие технологии отображения",
      description:
        "Наслаждайтесь яркими играми на 3,5-дюймовом ЖК-дисплее с четким разрешением 640x480",
      number: '3.5"',
      detail: "IPS дисплей",
      fullDescription: `Откройте для себя богатую коллекцию классических игр, включающую более 15,000 тайтлов из разных эпох. От культовых аркад до любимых консольных игр - наша библиотека охватывает все значимые платформы прошлого.

В коллекцию входят:
• Классические аркадные игры 80-х и 90-х
• Полные библиотеки NES, SNES, Sega и других консолей
• Эксклюзивные порты и редкие релизы
• Оптимизированные версии для современного железа`,
      imageUrl: "/src/assets/video/video.gif",
      imageAlt: "Коллекция ретро-игр",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
          <line x1="22" y1="11" x2="22" y2="13"></line>
        </svg>
      ),
      title: "Максимальная портативность",
      description:
        "Портативная, легкая консоль со съемным аккумулятором для игр на ходу",
      number: "6+",
      detail: "часов игры",
      fullDescription: `Откройте для себя богатую коллекцию классических игр, включающую более 15,000 тайтлов из разных эпох. От культовых аркад до любимых консольных игр - наша библиотека охватывает все значимые платформы прошлого.

В коллекцию входят:
• Классические аркадные игры 80-х и 90-х
• Полные библиотеки NES, SNES, Sega и других консолей
• Эксклюзивные порты и редкие релизы
• Оптимизированные версии для современного железа`,
      imageUrl: "/src/assets/img/hero/Display_Controls (2).webp",
      imageAlt: "Коллекция ретро-игр",
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Надежность и безопасность",
      description: "Играйте безопасно и комфортно с сертифицированной системой",
      number: "100%",
      detail: "безопасность",
      fullDescription: `Откройте для себя богатую коллекцию классических игр, включающую более 15,000 тайтлов из разных эпох. От культовых аркад до любимых консольных игр - наша библиотека охватывает все значимые платформы прошлого.

В коллекцию входят:
• Классические аркадные игры 80-х и 90-х
• Полные библиотеки NES, SNES, Sega и других консолей
• Эксклюзивные порты и редкие релизы
• Оптимизированные версии для современного железа`,
      imageUrl: "/src/assets/img/hero/Display_Controls (2).webp",
      imageAlt: "Коллекция ретро-игр",
    },
    {
      id: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      title: "Широкие настройки",
      description:
        "Настройте управление, яркость, звук и другие параметры под себя для максимального комфорта",
      number: "50+",
      detail: "настроек",
      fullDescription: `Откройте для себя богатую коллекцию классических игр, включающую более 15,000 тайтлов из разных эпох. От культовых аркад до любимых консольных игр - наша библиотека охватывает все значимые платформы прошлого.

В коллекцию входят:
• Классические аркадные игры 80-х и 90-х
• Полные библиотеки NES, SNES, Sega и других консолей
• Эксклюзивные порты и редкие релизы
• Оптимизированные версии для современного железа`,
      imageUrl: "/src/assets/img/hero/Display_Controls (2).webp",
      imageAlt: "Коллекция ретро-игр",
    },
    {
      id: 6,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Мультиплеер режим",
      description:
        "Играйте вместе с друзьями в режиме мультиплеера через WiFi или локальное соединение",
      number: "2-4",
      detail: "игрока",
      fullDescription: `Откройте для себя богатую коллекцию классических игр, включающую более 15,000 тайтлов из разных эпох. От культовых аркад до любимых консольных игр - наша библиотека охватывает все значимые платформы прошлого.

В коллекцию входят:
• Классические аркадные игры 80-х и 90-х
• Полные библиотеки NES, SNES, Sega и других консолей
• Эксклюзивные порты и редкие релизы
• Оптимизированные версии для современного железа`,
      imageUrl: "/src/assets/img/hero/Display_Controls (2).webp",
      imageAlt: "Коллекция ретро-игр",
    },
  ];

  return (
    <section className="about" id="features-r36s">
      <div className="about__container">
        <div className="about__header">
          <div className="about__labels">
            <span className="about__label">Возможности</span>
            <span className="about__label about__label--outline">R36S</span>
          </div>
          <h2 className="about__title">ИГРАЙТЕ. ОБЩАЙТЕСЬ. ОЖИВИТЕ.</h2>
          <p className="about__subtitle">
            Откройте для себя мир ретро-игр с современными технологиями
          </p>
        </div>

        <div className="about__cards">
          {features.map((feature) => (
            <div
              className={`about-card ${
                activeCard === feature.id ? "active" : ""
              }`}
              key={feature.id}
              onMouseEnter={() => setActiveCard(feature.id)}
              onMouseLeave={() => setActiveCard(null)}
              onMouseMove={handleMouseMove}
              style={{
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
              }}
            >
              <div className="card-blur"></div>
              <div className="card-glow"></div>
              <div className="about-card__content">
                <div className="about-card__icon-wrapper">{feature.icon}</div>
                <h3 className="about-card__title">{feature.title}</h3>
                <p className="about-card__description">{feature.description}</p>
                <div className="about-card__stats">
                  <span className="about-card__number">{feature.number}</span>
                  <span className="about-card__detail">{feature.detail}</span>
                </div>
                <button
                  className="about-card__button"
                  onClick={(e) => handleOpenModal(feature, e)}
                >
                  <span className="button-text">Подробнее</span>
                  <span className="button-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="card-indicator"></div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen &&
        selectedFeature &&
        createPortal(
          <ModalAbout feature={selectedFeature} onClose={handleCloseModal} />,
          document.body
        )}
    </section>
  );
};

export default About;
