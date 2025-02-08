// src/Sections/Reviews/Reviews.jsx
import { useEffect, useState } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Олександр",
      rating: 5,
      text: "Дуже задоволений якістю консолі. Швидка доставка та професійна консультація.",
      date: "15.01.2024",
    },
    {
      id: 2,
      name: "Марія",
      rating: 5,
      text: "Купила Nintendo Switch для сина. Чудовий сервіс та приємні ціни.",
      date: "20.01.2024",
    },
    {
      id: 3,
      name: "Іван",
      rating: 4,
      text: "Гарний магазин, великий вибір ігор та аксесуарів.",
      date: "25.01.2024",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("reviews");
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
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section id="reviews" className="reviews">
      <div className="container mx-auto px-4">
        <h2 className={`reviews-title ${isVisible ? "fade-in-up" : ""}`}>
          Відгуки
        </h2>

        <div className="reviews-slider">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`review-card ${isVisible ? "fade-in" : ""} ${
                index === activeReview ? "active" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="review-rating">{renderStars(review.rating)}</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <span className="review-name">{review.name}</span>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeReview ? "active" : ""}`}
              onClick={() => setActiveReview(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
