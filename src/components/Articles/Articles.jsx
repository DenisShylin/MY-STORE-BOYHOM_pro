import { useEffect, useRef } from "react";
import "./Articles.css";

const Articles = () => {
  const articlesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    articlesRef.current.forEach((article) => {
      if (article) {
        article.style.opacity = 0;
        article.style.transform = "translateY(20px)";
        article.style.transition = "all 0.6s ease-out";
        observer.observe(article);
      }
    });

    return () => observer.disconnect();
  }, []);

  const articles = [
    {
      id: 1,
      title: "Инновационный прорыв в мире портативных игровых консолей",
      sections: [
        {
          subtitle: "История успеха бренда на российском рынке",
          content:
            "BOYHOM R36S стремительно завоевывает сердца российских геймеров. Безусловно, этот бренд уже успел зарекомендовать себя на рынках СНГ. Более того, тысячи довольных пользователей ежедневно наслаждаются любимыми играми на своих консолях. Примечательно, что официальное присутствие бренда в России обеспечивает полную поддержку и гарантийное обслуживание.",
        },
        {
          subtitle: "Технические преимущества и инновации",
          content:
            "Современный процессор обеспечивает плавный геймплей даже в требовательных играх. В частности, мощная батарея гарантирует до 6 часов непрерывной игры. Следовательно, вы можете наслаждаться BOYHOM R36S игры без постоянной подзарядки. Помимо этого, яркий IPS-экран с разрешением 1280x720 делает изображение кристально четким.",
        },
        {
          subtitle: "Игровые возможности и развлечения",
          content:
            "Обширная библиотека совместимых игр впечатляет разнообразием жанров. Следует упомянуть, что BOYHOM R36S поддерживает множество популярных эмуляторов. Вместе с тем, встроенная память позволяет хранить сотни игр. Кроме того, слот для карты памяти обеспечивает дополнительное пространство для хранения.",
        },
      ],
    },
    {
      id: 2,
      title: "BOYHOM R36S: Новая эра портативных игровых консолей",
      sections: [
        {
          subtitle: "Лидерство на рынке СНГ",
          content:
            "Компания BOYHOM уверенно развивается на территории всех русскоговорящих стран. Официальные представительства открыты в России, Беларуси и Казахстане. Наши сервисные центры работают в каждом крупном городе. Профессиональная команда специалистов обеспечивает быструю техническую поддержку.",
        },
        {
          subtitle: "Революционные технические характеристики",
          content:
            "Игровая консоль оснащена мощным процессором последнего поколения. Встроенный графический ускоритель обеспечивает плавный геймплей. Батарея повышенной емкости гарантирует продолжительную работу устройства. Яркий IPS-дисплей отображает картинку в высоком разрешении.",
        },
        {
          subtitle: "Расширенные игровые возможности",
          content:
            "Библиотека совместимых игр включает тысячи популярных тайтлов. Мощное железо позволяет запускать требовательные 3D-проекты. Поддержка различных эмуляторов расширяет игровые возможности. Пользователи получают доступ к классическим и современным играм.",
        },
      ],
    },
  ];

  return (
    <section className="articles" id="articles">
      <div className="articles__container">
        <div className="articles__grid">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="article"
              ref={(el) => (articlesRef.current[index] = el)}
            >
              <h2 className="article__title">{article.title}</h2>
              {article.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="article__subtitle">{section.subtitle}</h3>
                  <div className="article__content">
                    <p>{section.content}</p>
                  </div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
