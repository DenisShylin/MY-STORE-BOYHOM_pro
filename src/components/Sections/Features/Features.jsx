import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./Features.css";

const Features = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Автоматическое воспроизведение видео и установка громкости
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Устанавливаем громкость на 50%
      videoRef.current.play().catch((error) => {
        console.log("Автовоспроизведение не удалось:", error);
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current && !isMuted) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (!isVisible) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMuted]);

  const handleBuyClick = () => {
    window.open(
      "https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleMoreInfoClick = () => {
    const aboutSection = document.getElementById("features-r36s");
    if (aboutSection) {
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      // При включении звука убеждаемся, что громкость установлена на 50%
      if (!videoRef.current.muted) {
        videoRef.current.volume = 0.5;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="features__container">
        <div className="features__content">
          <h2 className="features__title">Консоль R36S</h2>

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

          <div className="features__buttons">
            <button
              className="features__button"
              onClick={handleBuyClick}
              aria-label="Купить консоль R36S"
            >
              Купить сейчас
            </button>

            <button
              className="features__button-secondary"
              onClick={handleMoreInfoClick}
              aria-label="Узнать больше о R36S"
            >
              Узнать больше
            </button>
          </div>
        </div>

        <div className="features__image">
          <div className="features__image-wrapper">
            <video
              ref={videoRef}
              className="features__console-img"
              loop
              muted={isMuted}
              playsInline
              autoPlay
            >
              <source src="/src/assets/video/VIDEO_RS36.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео тег.
            </video>
            <button
              className="features__sound-toggle"
              onClick={toggleMute}
              aria-label={isMuted ? "Включить звук" : "Выключить звук"}
            >
              {isMuted ? (
                <VolumeX className="features__sound-icon" />
              ) : (
                <Volume2 className="features__sound-icon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
