import React, { useState } from 'react';
const Navbar = ({ activeSection }) => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleLinkClick = () => {
    if (isNavActive) {
      setIsNavActive(false);
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top p-3 navbar-light">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            <span className="text-primary">SUH</span>AIL
            <span className="brand-dot"></span>
          </a>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${isNavActive ? 'toggle' : ''}`}></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavActive ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { href: '#home', icon: 'bi-house-door', text: 'Home' },
                { href: '#about', icon: 'bi-person', text: 'About Me' },
                { href: '#projects', icon: 'bi-code-square', text: 'Projects' },
                { href: '#skills', icon: 'bi-gear', text: 'Skills' },
                { href: '#certifications', icon: 'bi-award', text: 'Certifications' },
                { href: '#education', icon: 'bi-mortarboard', text: 'Education' },
                { href: '#contact', icon: 'bi-envelope', text: 'Contact', class: 'contact-btn' },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link px-3 ${activeSection === item.href.slice(1) ? 'active' : ''} ${item.class || ''}`}
                    href={item.href}
                    onClick={handleLinkClick}
                  >
                    <i className={`bi ${item.icon} me-1`}></i>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;