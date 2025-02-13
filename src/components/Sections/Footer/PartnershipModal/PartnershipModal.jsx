import { useState } from "react";
import { X, Mail, Phone, Building, Globe } from "lucide-react";
import "./PartnershipModal.css";

const PartnershipModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container animate-modal">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h2 className="modal-title">Станьте нашим партнёром</h2>
            <button onClick={onClose} className="close-button">
              <X className="close-icon" />
            </button>
          </div>

          {/* Content */}
          <div className="form-grid">
            {/* Left side - Form */}
            <form onSubmit={handleSubmit} className="form-section">
              <div className="form-group">
                <label className="form-label">Название компании</label>
                <div className="relative">
                  <Building className="input-icon" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="ООО Компания"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Контактное лицо</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="relative">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="contact@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Телефон</label>
                <div className="relative">
                  <Phone className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Веб-сайт</label>
                <div className="relative">
                  <Globe className="input-icon" />
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Сообщение</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-textarea form-input"
                  placeholder="Расскажите о вашем предложении..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Отправить заявку
              </button>
            </form>

            {/* Right side - Info */}
            <div className="info-section">
              <div>
                <h3 className="info-title">Преимущества партнёрства</h3>
                <ul className="info-list">
                  <li className="info-item">
                    <span className="info-bullet bullet-blue"></span>
                    <span>
                      Доступ к эксклюзивным продуктам и специальным ценам
                    </span>
                  </li>
                  <li className="info-item">
                    <span className="info-bullet bullet-purple"></span>
                    <span>Маркетинговая и техническая поддержка</span>
                  </li>
                  <li className="info-item">
                    <span className="info-bullet bullet-blue"></span>
                    <span>Участие в совместных мероприятиях и акциях</span>
                  </li>
                  <li className="info-item">
                    <span className="info-bullet bullet-purple"></span>
                    <span>Обучение и сертификация сотрудников</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="info-title">Требования к партнёрам</h3>
                <ul className="info-list">
                  <li className="info-item">
                    <span className="info-bullet bullet-blue"></span>
                    <span>Опыт работы в сфере электроники или гейминга</span>
                  </li>
                  <li className="info-item">
                    <span className="info-bullet bullet-purple"></span>
                    <span>Наличие собственного канала продаж</span>
                  </li>
                  <li className="info-item">
                    <span className="info-bullet bullet-blue"></span>
                    <span>Готовность к активному продвижению продукции</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipModal;
