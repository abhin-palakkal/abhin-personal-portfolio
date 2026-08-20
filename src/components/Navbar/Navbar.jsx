import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-name">
        <h1>ABHIN</h1>
      </div>

      {/* DESKTOP NAVIGATION */}

      <div className="nav-list">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* RESUME */}

      <div className="nav-resume">
        <a href="/ABHIN.pdf" download="ABHIN.pdf">
          <span>Resume</span>
          <i className="fa-solid fa-download"></i>
        </a>
      </div>

      {/* MOBILE MENU BUTTON */}

      <button
        onClick={() => setMenuOpen(true)}
        className={`nav-menu-button ${menuOpen ? 'hide-menu-button' : ''}`}
        aria-label="Open navigation menu"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* MOBILE SIDE MENU */}

      <aside className={`nav-menu-container ${menuOpen ? 'active' : ''}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="nav-close-button"
          aria-label="Close navigation menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </aside>
    </nav>
  );
};

export default Navbar;
