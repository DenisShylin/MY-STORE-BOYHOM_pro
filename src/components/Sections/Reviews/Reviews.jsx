import { useState, useEffect } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [animatedCards, setAnimatedCards] = useState([]);

  const reviews = [
    {
      id: 1,
      rating: 5,
      color: "Purple 64GB",
      author: "AliExpress Shopper",
      date: "21 Aug 2024",
      text: "Regarding shipping, everything great and in time even arrived a few days before. Regarding the video console, incredible. its going great. I only recommend changing the SD you bring.",
      images: [
        "/src/assets/img/reviews/review1-1.jpg",
        "/src/assets/img/reviews/review1-2.jpg",
        "/src/assets/img/reviews/review1-3.jpg",
      ],
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      rating: 5,
      color: "Orange 64G",
      author: "V***h",
      date: "26 Aug 2024",
      text: "For their own pennies (and then more according to the excise tax)a topper, for nostalguvati, or just a Mati, I will kill a lot of people on bagatoh platforms. The city cable does not use the vikidati-i can do it like that, if we do it at home, the console will charge it through it.",
      images: [
        "/src/assets/img/reviews/review2-1.jpg",
        "/src/assets/img/reviews/review2-2.jpg",
      ],
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      rating: 5,
      color: "White 64GB",
      author: "M***z",
      date: "22 Aug 2024",
      text: "Pretty good in my opinion, its operating system is pretty well optimized. The catalog of games is extensive and well stocked. I would have liked them to add games such as Resident Evil or Silent Hill, even so I have the possibility to add it thanks to the expansion port MicroSD. Highly recommended 10/10",
      images: [
        "/src/assets/img/reviews/review3-1.jpg",
        "/src/assets/img/reviews/review3-2.jpg",
        "/src/assets/img/reviews/review3-3.jpg",
      ],
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
          <span className="reviews__label">Отзывы покупателей</span>
          <h2 className="reviews__title">Что говорят о консоли R36S</h2>
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

                {review.images?.length > 0 && (
                  <div className="review-card__images">
                    {review.images.map((image, index) => (
                      <div key={index} className="review-card__image-wrapper">
                        <img
                          src={image}
                          alt={`Review ${review.id} image ${index + 1}`}
                          className="review-card__image"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

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
                  <div className="review-card__helpful">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3L7 11v10h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    <span>Полезно ({review.helpful})</span>
                  </div>
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
