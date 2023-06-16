import "./styles/Footer.css";
import FooterLogo from "../static/yellowlemontxtlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Little Lemon" />
        </div>
        <menu className="footer-menu">
          <li>
            <strong>Navigation</strong>
          </li>
          <li>
            <Link to="/" relative="path">
              Home
            </Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <Link to="/booking" relative="path">
              Reservations
            </Link>
          </li>
          <li>
            <a href="#orderonline">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </menu>
        <menu className="footer-menu">
          <li>
            <strong>Contact</strong>
          </li>
          <li>Phone: +1 (289) 2346</li>
          <li>Email: littlelemon@gmail.com</li>
          <li>Address: 25 Street, Suite 330, Chicago, IL</li>
        </menu>
        <menu className="footer-menu">
          <li>
            <strong>Social Media</strong>
          </li>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
        </menu>
      </div>
    </footer>
  );
};

export default Footer;
