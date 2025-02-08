// src/components/Products/Products.jsx
import { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("portable");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const categories = {
    portable: {
      id: "portable",
      title: "Портативні консолі",
      products: [
        {
          id: "p1",
          name: "Nintendo Switch OLED",
          price: "14999",
          description: "Нова версія з OLED екраном",
          images: ["switch1.jpg", "switch2.jpg", "switch3.jpg", "switch4.jpg"],
        },
        // Додайте інші продукти
      ],
    },
    tv: {
      id: "tv",
      title: "Консолі для TV",
      products: [
        {
          id: "t1",
          name: "PlayStation 5",
          price: "24999",
          description: "Найпотужніша консоль нового покоління",
          images: ["ps5-1.jpg", "ps5-2.jpg", "ps5-3.jpg", "ps5-4.jpg"],
        },
        // Додайте інші продукти
      ],
    },
    controllers: {
      id: "controllers",
      title: "Контролери",
      products: [
        {
          id: "c1",
          name: "DualSense",
          price: "2999",
          description: "Бездротовий контролер для PS5",
          images: ["dualsense1.jpg", "dualsense2.jpg", "dualsense3.jpg"],
        },
        // Додайте інші продукти
      ],
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("products");
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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveImage(0);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setActiveImage(0);
  };

  return (
    <section id="products" className="products">
      <div className="container mx-auto px-4">
        <h2 className={`products-title ${isVisible ? "fade-in-up" : ""}`}>
          Наші продукти
        </h2>

        <div className="products-categories">
          {Object.values(categories).map((category) => (
            <button
              key={category.id}
              className={`category-button ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {categories[activeCategory].products.map((product, index) => (
            <div
              key={product.id}
              className={`product-card ${isVisible ? "fade-in" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleProductClick(product)}
            >
              <div className="product-image">
                <img
                  src={`../../assets/img/products/${product.images[0]}`}
                  alt={product.name}
                />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price} ₴</p>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="product-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <div className="modal-gallery">
              <div className="main-image">
                <img
                  src={`../../assets/img/products/${selectedProduct.images[activeImage]}`}
                  alt={selectedProduct.name}
                />
              </div>
              <div className="thumbnail-container">
                {selectedProduct.images.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${
                      activeImage === index ? "active" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={`../../assets/img/products/${image}`}
                      alt={`${selectedProduct.name} ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-info">
              <h3>{selectedProduct.name}</h3>
              <p className="modal-description">{selectedProduct.description}</p>
              <p className="modal-price">{selectedProduct.price} ₴</p>
              <button className="buy-button">Купити</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
