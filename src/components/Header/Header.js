import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="name">
        <h1>Madelyn Torff</h1>
      </Link>

      <nav>
        <ul className="nav-list">
          <Link to="/about" className="nav">
            <li>About</li>
          </Link>

          <Link to="/projects" className="nav">
            <li>Projects</li>
          </Link>

          <Link to="/contact" className="nav">
            <li>Contacts</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
