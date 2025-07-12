import React, { forwardRef } from 'react';
const Certifications = forwardRef((props, ref) => {
  const certifications = [
    {
      title: 'Web Development Bootcamp',
      issuer: 'Udemy',
      status: 'Completed',
      icon: 'fa-laptop-code',
      details: ['HTML, CSS, PHP, MySQL, WordPress', 'Instructor: Marcus Menti, Zechariah Tech'],
    },
    {
      title: 'Google Cybersecurity',
      issuer: 'Google',
      status: 'Completed',
      icon: 'fa-shield-alt',
      details: ['Fundamentals of Cybersecurity'],
    },
    {
      title: 'Technical Support Fundamentals',
      issuer: 'Google',
      status: 'Completed',
      icon: 'fa-headset',
      details: ['IT Support Foundations'],
    },
    {
      title: 'AI for Everyone',
      issuer: 'Google',
      status: 'Completed',
      icon: 'fa-robot',
      details: ['Introduction to AI Concepts'],
    },
    {
      title: 'Introduction to Git and GitHub',
      issuer: 'Google',
      status: 'Completed',
      icon: 'fa-git-alt',
      details: ['Version Control Systems'],
    },
    {
      title: 'Python Project: PDF File Handling Tool',
      issuer: 'Udemy',
      status: 'Completed',
      icon: 'fa-file-pdf',
      details: ['Instructor: Dr. Raj Gaurav Mishra'],
    },
  ];

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Certifications</span>
          </h2>
          <p className="section-subtitle">Professional Training & Achievements</p>
        </div>
        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={100 + index * 100}>
              <div className="cert-card">
                <div className="cert-status">
                  <span className={`status-badge ${cert.status.toLowerCase()}`}>{cert.status}</span>
                </div>
                <div className="cert-icon">
                  <i className={`fas ${cert.icon}`}></i>
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-details">
                    <ul>
                      {cert.details.map((detail, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle"></i> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shape-blob cert-blob-1"></div>
      <div className="shape-blob cert-blob-2"></div>
    </section>
  );
});

export default Certifications;