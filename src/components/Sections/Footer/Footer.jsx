import { useState } from "react";
import "./Footer.css"; // импорт стилей футера
import PartnershipModal from "./PartnershipModal/PartnershipModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__brand">
              <a href="/" className="footer__logo">
                R36S
              </a>
              <p className="footer__description">
                Откройте для себя мир ретро-гейминга с портативной консолью
                R36S. Тысячи классических игр в вашем кармане!
              </p>
              <div className="footer__social">
                <a
                  href="https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__link"
                >
                  <img
                    src="/src/assets/icons/aliexpress_logo_icon_167892.ico"
                    alt="Социальная сеть"
                    className="social__icon"
                  />
                </a>
              </div>
            </div>

            <div className="footer__column">
              <h3 className="footer__title">Продукты</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#features" className="footer__link">
                    Особенности
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#catalog" className="footer__link">
                    Каталог игр
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#accessories" className="footer__link">
                    Аксессуары
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#reviews" className="footer__link">
                    Отзывы
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__title">Поддержка</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#faq" className="footer__link">
                    FAQ
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#delivery" className="footer__link">
                    Доставка
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#warranty" className="footer__link">
                    Гарантия
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#contact" className="footer__link">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__title">Компания</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#about" className="footer__link">
                    О нас
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#blog" className="footer__link">
                    Блог
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#careers" className="footer__link">
                    Вакансии
                  </a>
                </li>
                <li className="footer__item">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="footer__link"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    Партнёрство
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__divider"></div>

          <div className="footer__bottom">
            <div className="footer__copyright">
              © 2025 <a href="/">R36S</a>. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <PartnershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Footer;
