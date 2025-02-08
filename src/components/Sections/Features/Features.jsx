import "./Features.css";

const Features = () => {
  const handleBuyClick = () => {
    window.open(
      "https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="features" id="features">
      <div className="features__container">
        <div className="features__content">
          <span className="features__subtitle">РЕТРО-ИГРЫ</span>

          <h2 className="features__title">
            ПОРТАТИВНАЯ ИГРОВАЯ
            <br />
            КОНСОЛЬ R36S
          </h2>

          <div className="features__description">
            <p>
              Портативная игровая консоль Retro Handheld R36S открывает дверь в
              захватывающий мир ретро-гейминга, предлагая впечатляющую коллекцию
              из более 15 000 легендарных игр разных эпох и платформ. Сердцем
              консоли служит премиальный 3,5-дюймовый IPS-экран, который
              передает изображение с потрясающей четкостью и насыщенностью
              цветов. BOYHOM R36S не просто воспроизводит старые игры - она
              переосмысливает ретро-гейминг для современной эпохи. Встроенная
              поддержка онлайн-мультиплеера позволяет соревноваться с друзьями.
              Погрузитесь в вселенную игр вместе с консолью BOYHOM R36S!
            </p>
          </div>

          <button
            className="features__button"
            onClick={handleBuyClick}
            aria-label="Купить консоль R36S"
          >
            Купить сейчас
          </button>
        </div>

        <div className="features__image">
          <div className="features__image-wrapper">
            <img
              src="/src/assets/img/features/about_2x.jpg"
              alt="R36S Gaming Console"
              className="features__console-img"
              width="600"
              height="600"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
