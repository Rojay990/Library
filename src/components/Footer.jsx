import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/home">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <a href="#landing" className="footer__link">
              Home
            </a>
            <span className="footer__link no-cursor">About</span>
            <Link to="/books" className="footer__link">
              Books
            </Link>
            <Link to="/cart" className="footer__link">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2026 Library</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
