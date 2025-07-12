import React, { forwardRef, useEffect, useRef } from 'react';
import myProfile from '../assets/myProfile.jpeg'
import MyResume from '../assets/MyResume.pdf'
const About = forwardRef((props, ref) => {
  const counterRefs = useRef([]);

  useEffect(() => {
    const animateCounter = (element) => {
      const target = parseInt(element.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const counter = setInterval(() => {
        current += step;
        if (current >= target) {
          element.textContent = target;
          clearInterval(counter);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counterRefs.current.forEach((counter) => animateCounter(counter));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding" ref={ref} data-aos="fade-up">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-image-wrapper">
              <div className="image-container">
                <div className="image-bg-shape"></div>
                <img src={myProfile} alt="Profile" className="img-fluid" />
                <div className="experience-badge">
                  <div className="badge-content p-2">
                    <span className="counter" data-target="1" ref={(el) => (counterRefs.current[0] = el)}>
                      1<span className="plus">+</span>
                    </span>
                    
                    <span className="text">Year Experience</span>
                  </div>
                  <svg className="badge-border" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" />
                  </svg>
                </div>
                <div className="project-badge">
                  <span className="counter" data-target="15" ref={(el) => (counterRefs.current[1] = el)}>
                  </span>
                  <span className="text">11</span>
                  <span className="text">Projects</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <h3 className="role-title">Web Developer|Programmer</h3>
              <p className="about-description">
                Hi, I'm Suhail Ahmed — a dedicated and versatile IT professional with a Bachelor's degree in Computer
                Science and over 1 years of experience. I specialize in Full Stack Web Development, working with
                technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB to build responsive,
                user-friendly applications. My expertise also includes computer programming (Java, Python, C, C++),
                database management, data structures, algorithms, and Cisco networking. I'm available to assist with a wide
                range of computer science projects, development tasks, and technical consultations. Let’s connect and bring
                your ideas to life!
              </p>
              <div className="info-grid">
                <div className="info-item">
                  <i className="bi bi-geo-alt"></i>
                  <div className="info-text">
                    <span className="label">Location:</span>
                    <span className="value">Khairpur, Sindh, Pakistan</span>
                  </div>
                </div>
                <div className="info-item">
                  <i className="bi bi-envelope"></i>
                  <div className="info-text">
                    <span className="label">Email:</span>
                    <span className="value">suhailbhand7@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="about-cta-buttons">
                <a href={MyResume} download className="about-btn about-btn-primary">
                  <span className="about-btn-content">
                    <i className="fas fa-download"></i>
                    <span>Download Resume</span>
                  </span>
                  <div className="btn-glow"></div>
                </a>
                <a href="#contact" className="about-btn about-btn-outline">
                  <span className="about-btn-content">
                    <i className="fas fa-paper-plane"></i>
                    <span>Contact Me</span>
                  </span>
                  <div className="btn-particles"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;