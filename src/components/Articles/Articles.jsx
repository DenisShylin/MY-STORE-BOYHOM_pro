// src/components/Articles/Articles.jsx
import { useEffect, useState } from "react";
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import "./Articles.css";

const Articles = () => {
  const [isVisible, setIsVisible] = useState(false);

  const articles = {
    portable: [
      {
        title: "Як вибрати портативну консоль?",
        content: `
          <p>При виборі портативної консолі важливо звернути увагу на наступні характеристики:</p>
          <ul>
            <li>Тривалість роботи від батареї</li>
            <li>Роздільна здатність екрану</li>
            <li>Вага та розміри</li>
            <li>Доступність ігор</li>
          </ul>
        `,
      },
      {
        title: "Догляд за портативною консоллю",
        content: `
          <p>Щоб ваша консоль служила довго, дотримуйтесь цих правил:</p>
          <ul>
            <li>Регулярно очищайте екран та корпус</li>
            <li>Використовуйте захисний чохол</li>
            <li>Уникайте перегріву пристрою</li>
          </ul>
        `,
      },
    ],
    tv: [
      {
        title: "Підключення консолі до телевізора",
        content: `
          <p>Правильне підключення консолі важливе для найкращої якості зображення:</p>
          <ul>
            <li>Використовуйте HDMI 2.1 для 4K/120Hz</li>
            <li>Налаштуйте HDR якщо доступно</li>
            <li>Виберіть правильний режим зображення на ТВ</li>
          </ul>
        `,
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("articles");
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

  useEffect(() => {
    if (isVisible) {
      const accordion = new Accordion(".articles-accordion", {
        duration: 400,
        showMultiple: true,
        onOpen: (currentElement) => {
          console.log("opened", currentElement);
        },
        onClose: (currentElement) => {
          console.log("closed", currentElement);
        },
      });

      return () => accordion.destroy();
    }
  }, [isVisible]);

  return (
    <section id="articles" className="articles">
      <div className="container mx-auto px-4">
        <h2 className={`articles-title ${isVisible ? "fade-in-up" : ""}`}>
          Корисна інформація
        </h2>

        <div className="articles-accordion">
          {Object.entries(articles).map(([category, items]) => (
            <div key={category} className="ac">
              <h3 className="ac-header">
                <button type="button" className="ac-trigger">
                  {category === "portable"
                    ? "Портативні консолі"
                    : "Консолі для телевізора"}
                </button>
              </h3>
              <div className="ac-panel">
                <div className="ac-content">
                  {items.map((article, index) => (
                    <div key={index} className="article-item">
                      <h4>{article.title}</h4>
                      <div
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
