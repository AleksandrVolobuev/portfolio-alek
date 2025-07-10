import React from "react";
import "../../scss/template/headers/_header-style-two.scss";
import "../../scss/template/widget/_widget.scss";
import "../../scss/utilites/_animation.scss";

const Sidebar = ({ onClose }) => (
  <aside id="sidebar-area" className="sidebar open-sidebar" aria-label="Sidebar navigation">
    <div className="sidebar-overlay" onClick={onClose} role="button" tabIndex={0} aria-label="Close sidebar overlay" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClose(); }}></div>

    <div className="sidebar-wrapper" role="dialog" aria-modal="true" aria-labelledby="sidebarTitle">
      <button
        type="button"
        className="sidebar-close-btn"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        ×
      </button>

      <div className="sidebar-content">
        <div className="sidebar-logo">
          <a className="dark-logo" href="index.html" aria-label="Homepage">
            <img src="/assets/images/logo/Alek2.png" alt="Logo" />
          </a>
        </div>

        <nav className="sidebar-menu-wrap" aria-label="Sidebar menu">
          {/* Тут можно добавить навигацию */}
        </nav>

        <section className="sidebar-about" aria-labelledby="aboutTitle">
          <h3 id="aboutTitle" className="sidebar-header">About Us</h3>
          <p>
            Efficient strategies for optimizing operational workflows are essential for business growth.
          </p>
          <a href="contact.html" className="theme-btn">Contact Us</a>
        </section>

        <section className="sidebar-contact" aria-labelledby="contactTitle">
          <h3 id="contactTitle" className="sidebar-header">Contact Us</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>24 Street Road, New York</span>
            </li>
            <li>
              <i className="fas fa-phone" aria-hidden="true"></i>
              <a href="tel:+181234567">+18 123 4567</a>
            </li>
            <li>
              <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </li>
          </ul>
        </section>

        <ul className="sidebar-social" role="list" aria-label="Social media links">
          <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#" aria-label="Google Plus"><i className="fab fa-google-plus"></i></a></li>
        </ul>
      </div>
    </div>
  </aside>
);

export default Sidebar;
