import { Link } from "react-router-dom";
import { BG_YELLOW, PROFILE_IMG } from "../../utils/constants";
import "./index.css";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="content-card">
          <p className="designation">UI/UX Designer</p>
          <h1 className="name">Hello, my name is Madelyn Torff</h1>
          <p className="professional-details">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="buttons-container">
            <Link to="/projects">
              <button className="project-button">Projects</button>
            </Link>
            <a
              href="https://www.linkedin.com/in/sachinbalagam/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="linkedin-button">LinkedIn</button>
            </a>
          </div>
        </div>
        <div className="image-card">
          <img src={BG_YELLOW} alt="background" className="bg-image" />
          <img src={PROFILE_IMG} alt="profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
