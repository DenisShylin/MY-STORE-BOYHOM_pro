import { useState } from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  AlertCircle,
} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Сбрасываем ошибку при изменении любого поля
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Проверка обязательных полей
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.message
      ) {
        throw new Error("Пожалуйста, заполните все поля");
      }

      // Валидация email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Пожалуйста, введите корректный email");
      }

      // Валидация телефона
      const phoneRegex = /^\+?[0-9]{10,14}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
        throw new Error("Пожалуйста, введите корректный номер телефона");
      }

      // Имитация отправки на сервер
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Очистка формы после успешной отправки
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      alert(
        "Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время."
      );
    } catch (error) {
      setError(
        error.message ||
          "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__noise"></div>
      <div className="contact__container">
        <div className="contact__header">
          <span className="contact__label">Свяжитесь с нами</span>
          <h2 className="contact__title">Остались вопросы?</h2>
          <p className="contact__description">
            Мы всегда готовы помочь вам с выбором консоли и ответить на любые
            вопросы о BOYHOM R36S
          </p>
        </div>

        <div className="contact__content">
          <form className="contact__form" onSubmit={handleSubmit}>
            {error && (
              <div className="form__error">
                <AlertCircle className="form__error-icon" size={16} />
                <span>{error}</span>
              </div>
            )}

            <div className="form__group">
              <label className="form__label" htmlFor="name">
                <MessageCircle size={16} className="form__icon" />
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form__input"
                value={formData.name}
                onChange={handleChange}
                placeholder="Иван Иванов"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="email">
                <Mail size={16} className="form__icon" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="phone">
                <PhoneCall size={16} className="form__icon" />
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form__input"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (___) ___-__-__"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="message">
                <MessageCircle size={16} className="form__icon" />
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                className="form__textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Напишите ваше сообщение..."
                disabled={isSubmitting}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="form__button"
              disabled={isSubmitting}
            >
              <Send size={20} className="button__icon" />
              {isSubmitting ? "Отправка..." : "Отправить сообщение"}
            </button>
          </form>

          <div className="contact__info">
            <div className="info__card">
              <PhoneCall className="info__icon" />
              <h3 className="info__title">Телефон</h3>
              <p className="info__text">+7 (800) 555-35-35</p>
              <p className="info__text">Пн-Пт: 9:00 - 18:00</p>
            </div>

            <div className="info__card">
              <Mail className="info__icon" />
              <h3 className="info__title">Email</h3>
              <p className="info__text">support@boyhom.com</p>
              <p className="info__text">sales@boyhom.com</p>
            </div>

            <div className="info__card">
              <MapPin className="info__icon" />
              <h3 className="info__title">Адрес</h3>
              <p className="info__text">г. Москва, ул. Примерная, д. 123</p>
              <p className="info__text">Работаем по всей России</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
