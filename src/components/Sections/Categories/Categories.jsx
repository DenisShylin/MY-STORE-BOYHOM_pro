// src/Sections/Categories/Categories.jsx
import { useEffect, useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    {
      id: "portable",
      title: "Портативна консоль",
      description: "Грайте будь-де та будь-коли",
      image: "../../assets/img/categories/portable.png",
    },
    {
      id: "tv",
      title: "Ігрова консоль для телевізора",
      description: "Максимальне занурення у світ ігор",
      image: "../../assets/img/categories/tv.png",
    },
    {
      id: "controllers",
      title: "Ігрові контролери",
      description: "Повний контроль над грою",
      image: "../../assets/img/categories/controllers.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("categories");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="categories" className="categories">
      <div className="container mx-auto px-4">
        <h2 className={`categories-title ${isVisible ? "fade-in-up" : ""}`}>
          Категорії
        </h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-card ${isVisible ? "fade-in" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="category-image">
                <img src={category.image} alt={category.title} />
              </div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
