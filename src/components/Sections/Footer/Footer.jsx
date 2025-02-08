import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">© 2024 BOYHOM</div>
          <div className="social">
            <a href="#">
              <img src="/src/assets/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/src/assets/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
