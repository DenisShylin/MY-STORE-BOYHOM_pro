// src/Sections/Contact/Contact.jsx
import { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут буде логіка відправки форми
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="contact">
      <div className="container mx-auto px-4">
        <h2 className={`contact-title ${isVisible ? "fade-in-up" : ""}`}>
          Звяжіться з нами
        </h2>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? "fade-in" : ""}`}>
            <div className="info-item">
              <h3>Адреса</h3>
              <p>м. Київ, вул. Хрещатик, 1</p>
            </div>
            <div className="info-item">
              <h3>Телефон</h3>
              <p>+380 (44) 123-45-67</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>info@boyhom.ua</p>
            </div>
            <div className="info-item">
              <h3>Графік роботи</h3>
              <p>Пн-Пт: 9:00 - 20:00</p>
              <p>Сб-Нд: 10:00 - 18:00</p>
            </div>
          </div>

          <form
            className={`contact-form ${isVisible ? "fade-in" : ""}`}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Ваше ім'я"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Ваше повідомлення"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Надіслати
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
