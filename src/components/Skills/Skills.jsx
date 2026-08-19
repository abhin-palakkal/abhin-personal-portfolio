import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-heading">
          <i className="fa-solid fa-code"></i>
          <h2>Skills</h2>
          <p>Technologies and tools I use to build modern web applications.</p>
        </div>

        <div className="skills-grid">
          <div className="skills-card">
            <div className="skills-card-heading">
              <i className="fa-solid fa-laptop-code"></i>
              <h3>Frontend</h3>
            </div>

            <div className="skills-list">
              <div className="skill-item">
                <img src="/html.png" alt="HTML5" />
                <span>HTML5</span>
              </div>

              <div className="skill-item">
                <img src="/css.png" alt="CSS3" />
                <span>CSS3</span>
              </div>

              <div className="skill-item">
                <img src="/javascript.png" alt="JavaScript" />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <img src="/react.png" alt="React.js" />
                <span>React.js</span>
              </div>
            </div>
          </div>

          {/* Backend */}

          <div className="skills-card">
            <div className="skills-card-heading">
              <i className="fa-solid fa-server"></i>
              <h3>Backend</h3>
            </div>

            <div className="skills-list">
              <div className="skill-item">
                <img src="/node.png" alt="Node.js" />
                <span>Node.js</span>
              </div>

              <div className="skill-item">
                <img src="/express.png" alt="Express.js" />
                <span>Express.js</span>
              </div>
            </div>
          </div>

          {/* Database */}

          <div className="skills-card">
            <div className="skills-card-heading">
              <i className="fa-solid fa-database"></i>
              <h3>Database</h3>
            </div>

            <div className="skills-list">
              <div className="skill-item">
                <img src="/mongodb.png" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          {/* Tools */}

          <div className="skills-card">
            <div className="skills-card-heading">
              <i className="fa-solid fa-screwdriver-wrench"></i>
              <h3>Tools</h3>
            </div>

            <div className="skills-list">
              <div className="skill-item">
                <i className="fa-brands fa-git-alt"></i>
                <span>Git</span>
              </div>

              <div className="skill-item">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </div>

              <div className="skill-item">
                <i className="fa-solid fa-paper-plane"></i>
                <span>Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
