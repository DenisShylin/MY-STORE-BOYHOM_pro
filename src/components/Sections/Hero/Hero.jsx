import { useEffect, useRef } from "react";
import heroImage1x from "../../../assets/img/hero/hero_1x_jpeg.jpg";
import heroImage2x from "../../../assets/img/hero/hero_2x_jpeg.jpg";
import "./Hero.css";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleBuyClick = () => {
    window.open(
      "https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content" ref={titleRef}>
          <span className="hero__label">ИГРОВАЯ КОНСОЛЬ R36S</span>
          <h1 className="hero__title">
            <span className="hero__title-line">ОЖИВИТЕ</span>
            <span className="hero__title-line">КЛАССИЧЕСКИЕ</span>
            <span className="hero__title-line">ИГРОВЫЕ МОМЕНТЫ</span>
          </h1>
          <div className="hero__buttons">
            <button
              className="hero__button hero__button--primary"
              onClick={handleBuyClick}
            >
              Купить сейчас
              <span className="hero__button-shine"></span>
            </button>
            <a
              href="#features"
              className="hero__button hero__button--secondary"
            >
              Узнать больше
            </a>
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__image-wrapper">
            <div className="hero__image-glow"></div>
            <picture>
              <source
                media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
                srcSet={heroImage2x}
              />
              <img
                src={heroImage1x}
                srcSet={`${heroImage1x} 1x, ${heroImage2x} 2x`}
                alt="R36S Gaming Console"
                className="hero__console-img"
                width="600"
                height="400"
                loading="eager"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__mouse">
          <div className="hero__mouse-wheel"></div>
        </div>
        <span>Прокрутите вниз</span>
      </div>
    </section>
  );
};

export default Hero;
