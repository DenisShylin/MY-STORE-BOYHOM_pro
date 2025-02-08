import "./About.css";

const IconGamepad = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="6" y1="12" x2="10" y2="12"></line>
    <line x1="8" y1="10" x2="8" y2="14"></line>
    <line x1="15" y1="13" x2="15.01" y2="13"></line>
    <line x1="18" y1="11" x2="18.01" y2="11"></line>
    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
  </svg>
);

const IconMonitor = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const IconBattery = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
    <line x1="6" y1="11" x2="6" y2="13"></line>
    <line x1="10" y1="11" x2="10" y2="13"></line>
    <line x1="14" y1="11" x2="14" y2="13"></line>
  </svg>
);

const IconShield = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const About = () => {
  const features = [
    {
      icon: <IconGamepad />,
      title: "Обширная коллекция ретро-игр",
      description:
        "Погрузитесь в ретро-игры с портативной игровой консолью r36s",
    },
    {
      icon: <IconMonitor />,
      title: "Яркие технологии отображения",
      description:
        "Наслаждайтесь яркими играми на 3,5-дюймовом ЖК-дисплее с четким разрешением 640x480 для захватывающего и плавного игрового процесса.",
    },
    {
      icon: <IconBattery />,
      title: "Максимальная портативность",
      description:
        "Портативная, легкая портативная консоль со съемным аккумулятором для игр на ходу.",
    },
    {
      icon: <IconShield />,
      title: "Надежность и безопасность",
      description:
        "Играйте безопасно и комфортно с сертифицированной аккумуляторной системой.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">
            ИГРАЙТЕ.
            <br />
            ОБЩАЙТЕСЬ.
            <br />
            ОЖИВИТЕ.
          </h2>
        </div>

        <div className="about__cards">
          {features.map((feature, index) => (
            <div className="about-card" key={index}>
              <div className="about-card__content">
                <div className="about-card__icon-wrapper">{feature.icon}</div>
                <h3 className="about-card__title">{feature.title}</h3>
                <p className="about-card__description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
