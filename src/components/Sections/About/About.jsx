import "./About.css";

import R36S1x from "../../../assets/img/abaut/R36S_8_1x.jpeg";
import R36S2x from "../../../assets/img/abaut/R36S_8_2x.jpeg";
import Boy1x from "../../../assets/img/abaut/boy17_4_1x.jpeg";
import Boy2x from "../../../assets/img/abaut/boy17_4_2x.jpeg";
import X61x from "../../../assets/img/abaut/x6_6_1x.jpeg";
import X62x from "../../../assets/img/abaut/x6_6_2x.jpeg";

const PRODUCTS = [
  {
    regular: R36S1x,
    retina: R36S2x,
    alt: "TV Gaming Console",
  },
  {
    regular: Boy1x,
    retina: Boy2x,
    alt: "Portable Gaming Console",
  },
  {
    regular: X61x,
    retina: X62x,
    alt: "Game Controller",
  },
];

const About = () => {
  return (
    <section id="about" className="about" aria-label="О наших продуктах">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Наші Продукти</h2>
          <p className="about-subtitle">
            BOYHOM – це світ захоплюючих ігор для всієї родини! Оберіть свою
            ідеальну консоль
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image-container">
                <picture>
                  <source
                    srcSet={product.retina}
                    media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
                    type="image/jpeg"
                  />
                  <img
                    src={product.regular}
                    alt={product.alt}
                    loading="lazy"
                    className="product-image"
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
