import React from 'react';
import { NavLink } from "react-router-dom";
// SCSS
import './navbar.scss';
// Assets
import LogoImg from '../../assets/navbar/logo (1).svg';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';

const DesktopNav = (props) => (
  <div id="nav">
  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`} >
    <div className="wrapper flex-s-between">
      <div>
        <NavLink to="/" exact>
          <img src={LogoImg} alt="logo" className="pointer" />
        </NavLink>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active-link"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active-link"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              activeClassName="active-link"
            >
              TEAM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolioinner"
              activeClassName="active-link"
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              activeClassName="active-link"
            >
              CAREER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active-link"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
);

export default DesktopNav;
