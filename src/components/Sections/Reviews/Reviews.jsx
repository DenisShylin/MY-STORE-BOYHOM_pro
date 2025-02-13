import { useState, useEffect } from "react";
import "./Reviews.css";

// Компонент анимированной стрелки
const AnimatedArrow = () => (
  <div className="review-card__arrow-wrapper">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="review-card__arrow"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </div>
);

// Компонент кнопки лайка
const LikeButton = ({ count }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="review-card__helpful"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isHovered ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        className={`transform transition-all duration-300 ${
          isHovered ? "scale-125" : "scale-100"
        }`}
      >
        <path d="M14 9V5a3 3 0 0 0-3-3L7 11v10h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
      <span>Healthy ({count})</span>
    </div>
  );
};

const Reviews = () => {
  const [animatedCards, setAnimatedCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const reviews = [
    {
      id: 1,
      rating: 5,
      color: "Purple 64GB",
      author: "AliExpress Shopper",
      date: "21 Aug 2024",
      text: "I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play anywhere.",
      image: "/src/assets/img/reviews/image_1.jpg",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      rating: 5,
      color: "Orange 64G",
      author: "V***h",
      date: "26 Aug 2024",
      text: "After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",
      image: "/src/assets/img/reviews/image_2.jpg",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      rating: 5,
      color: "White 64GB",
      author: "M***z",
      date: "22 Aug 2024",
      text: "The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",
      image: "/src/assets/img/reviews/image_3.jpg",
      helpful: 15,
      verified: true,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedCards((prev) => [...prev, entry.target.dataset.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".review-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleReviewClick = () => {
    window.open(
      "https://www.aliexpress.com/item/1005007226123844.html#feedback",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const StarIcon = ({ filled }) => (
    <svg
      className="review-card__star"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <section className="reviews" id="reviews">
      <div className="reviews__container">
        <div className="reviews__header">
          <span className="reviews__label">Reviews</span>
          <h2 className="reviews__title">Customer Reviews</h2>
        </div>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`review-card ${
                animatedCards.includes(review.id) ? "animate-in" : ""
              }`}
              data-id={review.id}
              onClick={handleReviewClick}
              onMouseEnter={() => setHoveredCard(review.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="review-card__content">
                <div className="review-card__header">
                  <div className="review-card__rating">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} filled={index < review.rating} />
                    ))}
                  </div>
                  <span className="review-card__variant">{review.color}</span>
                </div>

                <p className="review-card__text">{review.text}</p>

                <div className="review-card__image-wrapper">
                  <img
                    src={review.image}
                    alt={`Review ${review.id}`}
                    className="review-card__image"
                    loading="lazy"
                  />
                  {hoveredCard === review.id && <AnimatedArrow />}
                </div>

                <div className="review-card__footer">
                  <div className="review-card__author">
                    <span className="review-card__name">
                      {review.verified && (
                        <svg
                          className="review-card__verified"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                      {review.author}
                    </span>
                    <span className="review-card__date">{review.date}</span>
                  </div>
                  <LikeButton count={review.helpful} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
