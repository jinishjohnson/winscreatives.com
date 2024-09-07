import React from "react";
import { Link } from "react-router-dom";

// SCSS
import "./navbar.scss";
// Assets
import CloseIcons from '../../assets/navbar/mobile-close.svg';
import Logo from "../../assets/navbar/logo (1).svg";

const mobileNav = (props) => (
  <div id="nav">
  <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""}`} id="nav">
    <div className="mobile__navbar-close" onClick={props.closeMobileMenu}>
      <img src={CloseIcons} alt="close" />
    </div>
    <div className="mobile__navbar-logo flex-center">
      <Link
        to="/"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={props.closeMobileMenu}
      >
        <img src={Logo} alt="logo" />
      </Link>
    </div>
    <div className="mobile__navbar-menu">
      <ul>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            HOME
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            ABOUT
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="/team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            TEAM
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="/portfolioinner"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            PORTFOLIO
          </Link>
          </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="/career"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            CAREER
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </div>
  </div>
);

export default mobileNav;
