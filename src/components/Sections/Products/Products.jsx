import "./Products.css";

const Products = () => {
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
        "/src/assets/img/reviews/review1-2.jpg",
      ],
      helpful: 0,
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
      helpful: 1,
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
      helpful: 4,
    },
  ];

  const handleReviewClick = () => {
    window.open(
      "https://www.aliexpress.com/item/1005007226123844.html#feedback",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="products" id="products">
      <div className="products__container">
        <div className="products__header">
          <div className="products__labels">
            <span className="products__label">Отзывы</span>
            <span className="products__label products__label--outline">
              R36S
            </span>
          </div>
          <h2 className="products__title">Что говорят наши клиенты</h2>
          <p className="products__description">
            Реальные отзывы покупателей о консоли R36S с AliExpress. Узнайте,
            почему тысячи геймеров выбирают нашу консоль.
          </p>
        </div>

        <div className="products__reviews">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card"
              onClick={handleReviewClick}
            >
              <div className="review-card__header">
                <div className="review-card__rating">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="review-card__star"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={index < review.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="review-card__color">{review.color}</span>
              </div>

              <p className="review-card__text">{review.text}</p>

              {review.images.length > 0 && (
                <div className="review-card__images">
                  {review.images.slice(0, 3).map((image, index) => (
                    <div key={index} className="review-card__image-wrapper">
                      <img
                        src={image}
                        alt={`Review ${review.id} image ${index + 1}`}
                        className="review-card__image"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="review-card__footer">
                <div className="review-card__author">
                  <span className="review-card__name">{review.author}</span>
                  <span className="review-card__date">{review.date}</span>
                </div>
                <div className="review-card__helpful">
                  <span>Helpful ({review.helpful})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
