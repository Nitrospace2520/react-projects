import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../image/dhara-high-resolution-logo-white-transparent.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" width={120} height={75} />
      </div>
      <ul className={click ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="humburger-menu" onClick={() => setClick((prev) => !prev)}>
        {click ? <FaTimes size={40} /> : <FaBars size={40} />}
      </div>
    </nav>
  );
};

export default Navbar;
