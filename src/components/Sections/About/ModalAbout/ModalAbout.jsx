import { useEffect } from "react";
import "./ModalAbout.css";

const ModalAbout = ({ feature, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="modal-about-overlay open" onClick={onClose}>
      <div className="modal-about-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-about-close" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-about-header">
          <div className="modal-about-icon-wrapper">{feature.icon}</div>
          <h3 className="modal-about-title">{feature.title}</h3>
        </div>

        <img
          src={feature.imageUrl}
          alt={feature.imageAlt}
          className="modal-about-image"
        />

        <div className="modal-about-stats">
          <div className="modal-about-stat">
            <span className="modal-about-stat-number">{feature.number}</span>
            <span className="modal-about-stat-label">{feature.detail}</span>
          </div>
        </div>

        <div className="modal-about-description">{feature.fullDescription}</div>
      </div>
    </div>
  );
};

export default ModalAbout;
