import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем предпочтения пользователя по движению
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Если пользователь предпочитает уменьшенное движение, показываем контент сразу
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Используем requestAnimationFrame для более плавной анимации
    const animationFrame = requestAnimationFrame(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);

      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(animationFrame);
      };
    });

    // Очистка
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero"
      role="banner"
      aria-label="Головний банер"
    >
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container mx-auto px-4">
        <div className="hero-content">
          <h1
            className={`hero-title ${isVisible ? "fade-in-up" : ""}`}
            tabIndex={0}
          >
            BOYHOM
            <span className="hero-subtitle" aria-label="поринь у всесвіт ігор">
              поринь у всесвіт ігор
            </span>
          </h1>
          <div
            className={`hero-decoration ${isVisible ? "fade-in" : ""}`}
            aria-hidden="true"
          >
            <div className="hero-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
