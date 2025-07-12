import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top pb-5">
          <div className="row g-4">
            {/* Left Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand-section">
                <a className="footer-brand mb-4 d-inline-block" href="#home">
                  <span className="text-primary fw-bold">SUH</span>AIL
                  <span className="brand-dot"></span>
                </a>
                <p className="footer-description">
                  Crafting digital experiences through clean code and modern design. Transforming ideas into responsive,
                  user-friendly websites.
                </p>
                <div className="footer-social-links">
                  <a href="https://www.linkedin.com/in/suhail-ahmed7" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                    <span className="social-hover">LinkedIn</span>
                  </a>
                  <a href="https://github.com/Suhail-Ahmed7" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                    <span className="social-hover">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-links-section">
                <h5 className="footer-title">Quick Links</h5>
                <div className="footer-links-grid">
                  {[
                    { href: '#home', icon: 'bi-house-door', text: 'Home' },
                    { href: '#about', icon: 'bi-person', text: 'About Me' },
                    { href: '#projects', icon: 'bi-code-square', text: 'Projects' },
                    { href: '#skills', icon: 'bi-gear', text: 'Skills' },
                    { href: '#certifications', icon: 'bi-award', text: 'Certifications' },
                    { href: '#contact', icon: 'bi-envelope', text: 'Contact' },
                  ].map((link, index) => (
                    <a href={link.href} className="footer-link" key={index}>
                      <i className={`bi ${link.icon}`}></i>
                      <span>{link.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-contact-section">
                <h5 className="footer-title">Get in Touch</h5>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="contact-details">
                      <h6 className="text-start">Location:</h6>
                      <p>Khairpur, Sindh, Pakistan</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="contact-details">
                      <h6 className="text-start">Call Me:</h6>
                      <p>+92315-3677884</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="contact-details">
                      <h6 className="text-start">Email:</h6>
                      <p>suhailbhand7@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12">
              <hr className="footer-divider" />
              <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                <div className="copyright">
                  <p className="mb-0">
                    © <span id="currentYear">{new Date().getFullYear()}</span> <strong>Suhail Ahmed.</strong> All rights reserved.
                  </p>
                </div>
                <div className="footer-legal">
                  <a href="#" className="legal-link">Privacy Policy</a>
                  <span className="separator">|</span>
                  <a href="#" className="legal-link">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Background Shapes */}
      <div className="footer-shape-1"></div>
      <div className="footer-shape-2"></div>
    </footer>
  );
};

export default Footer;
