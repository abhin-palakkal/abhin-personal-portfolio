import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-name">
        <h1>ABHIN</h1>
      </div>
      <div className="nav-list">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-resume">
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <span>Resume</span>
          <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <button className="nav-menu-button" aria-label="Open navigation menu">
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
