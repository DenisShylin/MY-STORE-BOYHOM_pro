import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              BOYHOM
            </a>
            <p className="footer__description">
              Откройте для себя мир ретро-гейминга с портативной консолью BOYHOM
              R36S. Тысячи классических игр в вашем кармане!
            </p>
            <div className="footer__social">
              <a href="#" className="social__link">
                <Facebook size={20} className="social__icon" />
              </a>
              <a href="#" className="social__link">
                <Twitter size={20} className="social__icon" />
              </a>
              <a href="#" className="social__link">
                <Instagram size={20} className="social__icon" />
              </a>
              <a href="#" className="social__link">
                <Youtube size={20} className="social__icon" />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Продукты</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#features" className="footer__link">
                  <ChevronRight size={16} />
                  Особенности
                </a>
              </li>
              <li className="footer__item">
                <a href="#catalog" className="footer__link">
                  <ChevronRight size={16} />
                  Каталог игр
                </a>
              </li>
              <li className="footer__item">
                <a href="#accessories" className="footer__link">
                  <ChevronRight size={16} />
                  Аксессуары
                </a>
              </li>
              <li className="footer__item">
                <a href="#reviews" className="footer__link">
                  <ChevronRight size={16} />
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
                  <ChevronRight size={16} />
                  FAQ
                </a>
              </li>
              <li className="footer__item">
                <a href="#delivery" className="footer__link">
                  <ChevronRight size={16} />
                  Доставка
                </a>
              </li>
              <li className="footer__item">
                <a href="#warranty" className="footer__link">
                  <ChevronRight size={16} />
                  Гарантия
                </a>
              </li>
              <li className="footer__item">
                <a href="#contact" className="footer__link">
                  <ChevronRight size={16} />
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
                  <ChevronRight size={16} />О нас
                </a>
              </li>
              <li className="footer__item">
                <a href="#blog" className="footer__link">
                  <ChevronRight size={16} />
                  Блог
                </a>
              </li>
              <li className="footer__item">
                <a href="#careers" className="footer__link">
                  <ChevronRight size={16} />
                  Вакансии
                </a>
              </li>
              <li className="footer__item">
                <a href="#partners" className="footer__link">
                  <ChevronRight size={16} />
                  Партнёры
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © 2024 <a href="/">BOYHOM</a>. Все права защищены.
          </div>
          <div className="footer__policy">
            <a href="#privacy" className="footer__policy-link">
              Политика конфиденциальности
            </a>
            <a href="#terms" className="footer__policy-link">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
