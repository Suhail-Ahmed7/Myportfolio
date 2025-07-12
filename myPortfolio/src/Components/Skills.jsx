import React, { forwardRef, useEffect } from 'react';

const Skills = forwardRef((props, ref) => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', progress: 85, tags: ['OOP', 'Data Structures', 'Algorithms'] },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', progress: 80, tags: ['OOP', 'Multithreading', 'Data Structures'] },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', progress: 90, tags: ['Pandas', 'Machine Learning'] },
      ],
    },
    {
      category: 'Web Development',
      items: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', progress: 90, tags: ['Semantic HTML', 'Forms', 'SEO'] },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', progress: 85, tags: ['Flexbox', 'Grid', 'Animations'] },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', progress: 75, tags: ['ES6+', 'DOM', 'APIs'] },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', progress: 80, tags: ['Components', 'Hooks', 'State'] },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', progress: 75, tags: ['Express', 'API', 'Server'] },
      ],
    },
    {
      category: 'Data & Database Management',
      items: [
        { name: 'Database Management', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', progress: 80, tags: ['SQL', 'NoSQL', 'Normalization'] },
        { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg', progress: 70, tags: ['Visualization', 'Statistics'] },
      ],
    },
  ];

  useEffect(() => {
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach((bar) => {
        const value = bar.getAttribute('data-value');
        let width = 0;
        const duration = Math.random() * 1000 + 1000;
        const increment = (value / duration) * 10;

        const animation = setInterval(() => {
          if (width >= value) {
            clearInterval(animation);
          } else {
            width += increment;
            bar.style.width = Math.min(width, value) + '%';
          }
        }, 10);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBars();
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
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Technical <span className="highlight">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-cards">
                {category.items.map((skill, i) => (
                  <div className="skill-card" key={i}>
                    <img className="skill-icon" src={skill.icon} alt={skill.name} />
                    <h4>{skill.name}</h4>
                    <div className="progress-wrapper">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" data-value={skill.progress}>
                          <span className="progress-tooltip">{skill.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="skill-tags">
                      {skill.tags.map((tag, j) => (
                        <span className="skill-tag" key={j}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;