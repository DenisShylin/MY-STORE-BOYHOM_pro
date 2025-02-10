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
    <div className="modal-about-overlay" onClick={onClose}>
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-about-header">
          <div className="modal-about-icon-wrapper">{feature.icon}</div>
          <h3 className="modal-about-title">{feature.title}</h3>
        </div>

        <div className="modal-about-body">
          <img
            src={feature.imageUrl}
            alt={feature.imageAlt}
            className="modal-about-image"
          />

          <div className="modal-about-stats">
            <div className="modal-about-price-wrapper">
              <span className="modal-about-original-price">US $108.06</span>
              <span className="modal-about-current-price">
                $35.48
                <span style={{ fontSize: "24px" }}>US</span>
              </span>
            </div>
            <a
              href="https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X"
              className="modal-about-button modal-about-button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="modal-about-button-pulse"></span>
              <span className="modal-about-button-text">BUY NOW -70%</span>
              <span className="modal-about-button-shine"></span>
            </a>
          </div>

          <div className="modal-about-description">
            {feature.fullDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAbout;
