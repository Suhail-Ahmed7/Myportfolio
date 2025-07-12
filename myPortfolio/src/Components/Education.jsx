import React, { forwardRef } from 'react';

const Education = forwardRef((props, ref) => {
  const education = [
    {
      title: 'Sukkur IBA University',
      period: '2022-Present',
      location: 'Sukkur, Pakistan',
      type: 'Bachelors of Computer Science',
      icon: 'bi-mortarboard-fill',
      subjects: ['Mathematics', 'Physics', 'Computer Science'],
    },
    {
      title: "Government Boy's Degree College",
      period: '2019-2021',
      location: 'Khairpur, Pakistan',
      type: 'Intermediate (Pre-Engineering)',
      icon: 'bi-building-fill',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      achievements: ['Top 5% of Class'],
    },
  ];

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Education</span>
          </h2>
          <p className="section-subtitle">Academic Background & Achievements</p>
        </div>
        <div className="timeline" data-aos="fade-up">
          {education.map((item, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={100 + index * 100}>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="education-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div className="education-details">
                    <h3 className="education-title">{item.title}</h3>
                    <div className="education-meta">
                      <span className="education-period">
                        <i className="bi bi-calendar-event me-2"></i>{item.period}
                      </span>
                      <span className="education-location">
                        <i className="bi bi-geo-alt me-2"></i>{item.location}
                      </span>
                    </div>
                    <p className="education-type">{item.type}</p>
                    <div className="education-subjects">
                      {item.subjects.map((subject, i) => (
                        <span className="subject-tag" key={i}>
                          <i className={`bi bi-${subject === 'Mathematics' ? 'calculator' : subject === 'Physics' ? 'atom' : subject === 'Computer Science' ? 'cpu' : 'flask'} me-1`}></i>
                          {subject}
                        </span>
                      ))}
                    </div>
                    {item.achievements && (
                      <div className="education-achievements">
                        <h4 className="achievements-title">Key Achievements:</h4>
                        <ul className="achievements-list">
                          {item.achievements.map((achievement, i) => (
                            <li key={i}>
                              <i className="bi bi-award me-2"></i>{achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shape-blob education-blob-1"></div>
      <div className="shape-blob education-blob-2"></div>
    </section>
  );
});

export default Education;