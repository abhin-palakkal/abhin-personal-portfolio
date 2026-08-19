import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Heading */}

        <div className="projects-heading">
          <i className="fa-solid fa-code"></i>

          <h2>Projects</h2>

          <p>
            A selection of projects I've built while learning and working with
            modern web technologies.
          </p>
        </div>

        {/* Projects */}

        <div className="projects-grid">
          {/* Project 01 */}

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <i className="fa-solid fa-users"></i>
              </div>
            </div>

            <div className="project-content">
              <span className="project-number">01</span>

              <h3>Employee Management System</h3>

              <p>
                A full-stack web application for managing employees,
                departments, and organizational data through a centralized
                dashboard.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>

                <a href="#" className="project-link">
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Project 02 */}

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <i className="fa-solid fa-dumbbell"></i>
              </div>
            </div>

            <div className="project-content">
              <span className="project-number">02</span>

              <h3>Gym Management Platform</h3>

              <p>
                A MERN stack platform designed to manage gym members, trainers,
                attendance, workouts, products, and daily operations.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>

                <a href="#" className="project-link">
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Project 03 */}

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <i className="fa-solid fa-clipboard-check"></i>
              </div>
            </div>

            <div className="project-content">
              <span className="project-number">03</span>

              <h3>Attendance Management System</h3>

              <p>
                A simple web application for recording, managing, and tracking
                attendance data with an easy-to-use interface.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>

                <a href="#" className="project-link">
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects */}

        <div className="projects-view-all">
          <a href="#" className="view-all-projects">
            View All Projects
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
