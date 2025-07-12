import React, { forwardRef, useState } from 'react';
const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get in <span className="highlight">Touch</span>
          </h2>
          <p className="section-subtitle">Let's discuss your project or opportunity</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-card" data-aos="fade-up">
              <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person-fill"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-envelope-fill"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-chat-square-text-fill"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-chat-dots-fill"></i>
                        </span>
                        <textarea
                          className="form-control form-control-lg"
                          rows="5"
                          placeholder="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="about-btn about-btn-primary">
                      <span className="about-btn-content">
                        <i className="bi bi-send-fill me-2"></i>
                        <span>Send Message</span>
                      </span>
                      <div className="btn-glow"></div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="row g-4 mt-5">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-envelope-paper-fill"></i>
                  </div>
                  <h4>Email</h4>
                  <p>suhailbhand7@gmail.com</p>
                  <a href="mailto:suhailbhand7@gmail.com" className="contact-link">
                    Send Email <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <h4>Phone</h4>
                  <p>+92315-3677884</p>
                  <a href="tel:+923153677884" className="contact-link">
                    Call Now <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <h4>Location</h4>
                  <p>Khairpur, Sindh, Pakistan</p>
                  <a href="#" className="contact-link">
                    View on Map <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-blob contact-blob-1"></div>
      <div className="shape-blob contact-blob-2"></div>
    </section>
  );
});

export default Contact;