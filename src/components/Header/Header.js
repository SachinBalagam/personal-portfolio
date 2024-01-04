import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="header-logo-name">
        <h4>Madelyn Torff</h4>
      </Link>

      <nav>
        <ul className="nav-list">
          <Link to="/" className="nav">
            <li>About</li>
          </Link>

          <Link to="/projects" className="nav">
            <li>Projects</li>
          </Link>

          <Link to="/contact" className="nav">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
