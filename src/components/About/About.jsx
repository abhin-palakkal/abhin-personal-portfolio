import './About.css';

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="section-about-container">
        <div className="about-box1">
          <div className="about-heading">
            <i className="fa-regular fa-user"></i>
            <h2>About Me</h2>
          </div>

          <p>
            I’m a software developer specializing in the MERN stack, with a
            strong interest in building modern, scalable, and user-focused web
            applications. I enjoy turning ideas into practical digital solutions
            while continuously improving my skills and exploring new
            technologies.
          </p>
        </div>

        <div className="about-box2">
          <div className="about-box2-main">
            <i className="fa-solid fa-graduation-cap"></i>
            <h4>Education</h4>
            <p>BSc Computer Science , Calicut University</p>
          </div>

          <div className="about-box2-main">
            <i className="fa-solid fa-location-dot"></i>
            <h4>Location</h4>
            <p>Kerala, India</p>
          </div>

          <div className="about-box2-main">
            <i className="fa-regular fa-envelope"></i>
            <h4>Email</h4>
            <p>abhinpalakkal24@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
