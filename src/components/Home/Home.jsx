import './Home.css';

const Home = () => {
  return (
    <>
      <section id="home" className="home-section">
        <div className="home-main">
          <div className="home-main-box1">
            <h3>Hi, I'm</h3>
            <h1>ABHIN PALAKKAL</h1>
            <h2>MERN Stack Developer</h2>
            <p>
              I’m a software developer specializing in the MERN stack, with a
              strong interest in building modern, scalable, and user-focused web
              applications. I turn ideas into reliable digital solutions through
              clean code, thoughtful design, and continuous learning.
            </p>
          </div>

          <div className="home-main-box2">
            <a href="#projects" className="home-action-button primary">
              <span>View Projects</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a href="#contact" className="home-action-button secondary">
              <i className="fa-regular fa-envelope"></i>
              <span>Contact Me</span>
            </a>
          </div>
          <div className="home-main-box3">
            <h1>Technologies i work with</h1>
            <div className="home-skill-one">
              <img src="/mongodb.png" alt="MongoDB" />
              <p>MongoDB</p>
            </div>

            <div className="home-skill-two">
              <img src="/express.png" alt="Express.js" />
              <p>Express.js</p>
            </div>

            <div className="home-skill-three">
              <img src="/react.png" alt="React.js" />
              <p>React.js</p>
            </div>

            <div className="home-skill-four">
              <img src="/node.png" alt="Node.js" />
              <p>Node.js</p>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src="/abhis.png" alt="Abhin Palakkal" />
        </div>
      </section>
    </>
  );
};

export default Home;
