import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/" className="logo">
        Veloura<span>Events</span>
      </Link>

      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/process">Our Process</Link>
      </div>

      <Link to="/contact" className="nav-button">
        Book a Consultation
      </Link>
    </nav>
  );
}

export default Navbar;