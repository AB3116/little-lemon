import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LittleLemonLogo from "../static/littlelemon.png";
import { Link } from "react-router-dom";
import "./styles/Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="hamburger-menu" onClick={handleMenuToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="logo">
        <img src={LittleLemonLogo} alt="Logo" />
      </div>
      <ul className={`links ${isOpen ? "open" : ""}`}>
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
      </ul>
    </nav>
  );
};

export default Nav;
