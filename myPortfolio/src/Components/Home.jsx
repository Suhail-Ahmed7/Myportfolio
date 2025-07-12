import React, { forwardRef, useEffect, useRef } from 'react';


const Home = forwardRef((props, ref) => {
  const animatedNameRef = useRef(null);

  useEffect(() => {
    const fullName = 'Suhail Ahmed.';
    let currentIndex = 0;

    const typeWriter = () => {
      if (currentIndex < fullName.length) {
        animatedNameRef.current.textContent = fullName.substring(0, currentIndex + 1);
        currentIndex++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(eraseText, 2000);
      }
    };

    const eraseText = () => {
      if (currentIndex > 0) {
        animatedNameRef.current.textContent = fullName.substring(0, currentIndex);
        currentIndex--;
        setTimeout(eraseText, 50);
      } else {
        setTimeout(typeWriter, 500);
      }
    };

    animatedNameRef.current.textContent = fullName;
    typeWriter();

    animatedNameRef.current.style.opacity = '0';
    animatedNameRef.current.style.transform = 'translateY(20px)';
    setTimeout(() => {
      animatedNameRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      animatedNameRef.current.style.opacity = '1';
      animatedNameRef.current.style.transform = 'translateY(0)';
    }, 300);
  }, []);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center" ref={ref}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <h1 id="animated-name" className="display-3 fw-bold mb-3" ref={animatedNameRef}>
              Suhail Ahmed
            </h1>
            <div className="position-relative mb-4">
              <h2 className="text-dark fs-3 role-text">
                <span className="role-wrapper">
                  <span className="letters">Full Stack Developer|Programmer</span>
                </span>
              </h2>
            </div>
            <p className="text-secondary fade-in-up mb-4" style={{ color: '#333333', fontWeight: 500 }}>
              <span className="me-3">
                <i className="bi bi-phone-vibrate me-2" style={{ color: '#333333' }}></i>+92315-3677884
              </span>
              <span>
                <i className="bi bi-envelope me-2" style={{ color: '#333333' }}></i>suhailbhand7@gmail.com
              </span>
            </p>
            <div className="social-links fade-in-up">
              <a
                href="https://www.linkedin.com/in/suhail-ahmed7"
                target="_blank"
                className="btn btn-outline-primary btn-lg mx-2 social-btn"
              >
                <i className="bi bi-linkedin"></i>
                <span className="social-text">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Suhail-Ahmed7"
                target="_blank"
                className="btn btn-outline-primary btn-lg mx-2 social-btn"
              >
                <i className="bi bi-github"></i>
                <span className="social-text">GitHub</span>
              </a>
              <a href="./MyResume.pdf" target="_blank" className="btn btn-outline-primary btn-lg mx-2 social-btn">
                <i className="bi bi-file-earmark-text"></i>
                <span className="social-text">Resume</span>
              </a>
            </div>
            <div className="scroll-down fade-in mt-5">
              <a href="#about" className="text-dark">
                <i className="bi bi-mouse"></i>
                <span className="ms-2">Scroll Down</span>
                <div className="scroll-down-arrow">
                  <i className="bi bi-arrow-down"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-blob"></div>
      <div className="shape-blob two"></div>
    </section>
  );
});

export default Home;