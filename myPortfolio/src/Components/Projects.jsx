import React, { forwardRef, useState } from 'react';
import ai2 from '../assets/ai2.png'
import event from '../assets/event.jpg'
import notepad from '../assets/notepad.png'
const Projects = forwardRef((props, ref) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      status: 'MERN',
      image: ai2,
      title: 'AI Code Reviewer',
      description: 'AI Code Reviewer empowers developers by using Google Gemini AI to instantly generate expert-level code feedback.',
      tech: ['React', 'CSS3', 'Node.js', 'Express', 'MongoDB'],
      features: ['Responsive Design', 'Different Programming Languages Support', 'History'],
      liveLink: 'https://ai-powered-code-reviewer-ruby.vercel.app',
      codeLink: 'https://github.com/Suhail-Ahmed7/AI-Powered-Code-Reviewer',
    },
    {
      id: 2,
      category: 'web',
      status: 'MERN',
      image: event,
      title: 'Event Tracker',
      description: 'A fully functional MERN stack application for managing personal or organizational events.',
      tech: ['React', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      features: ['Modern Design', 'Animations', 'Fast Loading'],
      liveLink: 'https://event-tracker-mauve.vercel.app/',
      codeLink: 'https://github.com/Suhail-Ahmed7/Event-Tracker',
    },
    {
      id: 3,
      category: 'other',
      status: 'Java',
      image: notepad,
      title: 'Notepad integrated with Java Compiler',
      description: 'Custom Notepad with Java Compiler and a user-friendly GUI for beginners.',
      tech: ['Java', 'Java GUI'],
      features: ['Java', 'Java GUI', 'Modern UI'],
      liveLink: 'https://youtu.be/rErqZRsTYgg?si=O9bUiUm56-as6X3h',
      codeLink: 'https://github.com/Suhail-Ahmed7/Notepad-Java-Compiler',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="project-section" ref={ref}>
      <div className="project-bg-shape project-bg-shape-1"></div>
      <div className="project-bg-shape project-bg-shape-2"></div>
      <div className="container">
        <div className="project-header" data-aos="fade-up">
          <h2 className="project-title">
            My Creative <span className="project-title-gradient">Portfolio</span>
          </h2>
          <p className="project-subtitle">Discover my work and the innovative solutions I've crafted</p>
        </div>
        <div className="project-filter-container d-flex flex-wrap" data-aos="fade-up" data-aos-delay="100">
          {['all', 'web', 'app', 'other'].map((category) => (
            <button
              key={category}
              className={`project-filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              data-filter={category}
            >
              {category === 'all' ? 'All Projects' : category === 'web' ? 'Web Development' : category === 'app' ? 'JavaScript/C++' : 'Other'}
            </button>
          ))}
        </div>
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={project.id} data-aos="fade-up" data-aos-delay={200 + index * 100}>
              <div className="project-flip-card">
                <div className="project-flip-inner">
                  <div className="project-flip-front">
                    <div className="project-status-badge">{project.status}</div>
                    <div className="project-image-wrapper">
                      <img className="project-image" src={project.image} alt={project.title} />
                      <div className="project-image-overlay">
                        <div className="project-overlay-content">
                          <i className="fas fa-plus"></i>
                          <span>View Details</span>
                        </div>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-name">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech-stack">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span className="project-tech-pill" key={i}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="project-flip-back">
                    <div className="project-back-content">
                      <div>
                        <h3 className="project-back-title">{project.title}</h3>
                        <p className="project-back-description">{project.description}</p>
                        <div className="project-features-list">
                          {project.features.map((feature, i) => (
                            <div className="project-feature-item" key={i}>
                              <i className={`fas ${feature.includes('Responsive') ? 'fa-mobile-alt' : feature.includes('Languages') ? 'fa-code' : feature.includes('History') ? 'fa-search' : 'fa-paint-brush'} project-feature-icon`}></i>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="project-tech-details">
                          <h4 className="project-tech-title">Technologies Used:</h4>
                          <div className="project-tech-stack">
                            {project.tech.map((tech, i) => (
                              <span className="project-tech-pill" key={i}>{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="project-action-links">
                        <a href={project.liveLink} className="project-link-btn project-link-live" target="_blank">
                          <i className="fas fa-external-link-alt"></i>
                          {project.title.includes('Notepad') ? 'Watch Demo' : 'Live Demo'}
                        </a>
                        <a href={project.codeLink} className="project-link-btn project-link-code" target="_blank">
                          <i className="fab fa-github"></i>
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="project-view-more-container" data-aos="fade-up" data-aos-delay="500">
          <div className="project-view-more-wrapper">
            <a href="https://github.com/Suhail-Ahmed7" className="project-view-more-btn" target="_blank">
              <span className="btn-content">
                <span className="btn-text">View More Projects</span>
                <span className="btn-icon">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </span>
              <span className="btn-particles"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;