// src/Sections/Features/Features.jsx
import { useEffect, useState } from "react";
import "./Features.css";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      id: "quality",
      title: "Висока якість",
      description: "Тільки оригінальна продукція від офіційних постачальників",
      icon: "../../assets/icons/quality.svg",
    },
    {
      id: "warranty",
      title: "Гарантія",
      description: "Офіційна гарантія на всю продукцію від виробника",
      icon: "../../assets/icons/warranty.svg",
    },
    {
      id: "support",
      title: "Підтримка 24/7",
      description: "Професійна консультація та допомога у виборі",
      icon: "../../assets/icons/support.svg",
    },
    {
      id: "delivery",
      title: "Швидка доставка",
      description: "Доставка по всій Україні протягом 1-3 днів",
      icon: "../../assets/icons/delivery.svg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features");
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

  return (
    <section id="features" className="features">
      <div className="container mx-auto px-4">
        <h2 className={`features-title ${isVisible ? "fade-in-up" : ""}`}>
          Наші переваги
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card ${isVisible ? "fade-in" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
