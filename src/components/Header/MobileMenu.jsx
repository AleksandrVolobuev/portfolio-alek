import React from "react";
import "../../scss/reset/_mobile-menu.scss";
import "../../scss/utilites/_animation.scss";

const MobileMenu = ({ onClose, visible }) => (
  <div className={`mobile-menu-wrapper ${visible ? "body-visible" : ""}`}>
    <div className="mobile-menu-area">
      <button
        type="button"
        className="menu-toggle"
        aria-label="Close menu"
        onClick={onClose}
      >
        <i className="fas fa-times"></i>
      </button>

      <div className="mobile-logo">
        <a href="index.html">
          <img
            src="/assets/images/logo/site-logo-light.png"
            alt="Site Logo"
            width="150"
            height="auto"
          />
        </a>
      </div>

      <nav className="mobile-menu" aria-label="Primary mobile navigation">
        <ul className="navigation clearfix">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#portfolio">Works</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="sidebar-wrap">
        <address>
          <p>27 Division St, New York, NY 10002, USA</p>
        </address>
      </div>

      <div className="sidebar-wrap">
        <p>
          <a href="tel:1800123654987">+1 800 123 654 987</a>
        </p>
        <p>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </p>
      </div>

      <div className="social-btn style3" role="list">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#" aria-label="Dribbble">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
    </div>
  </div>
);

export default MobileMenu;
