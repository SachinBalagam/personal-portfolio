import ProjectCard from "../ProjectCard/ProjectCard";
import "./index.css";

const Projects = () => {
  return (
    <div className="project-page-container">
      <h2 className="pp-heading">Projects</h2>
      <img
        src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704390133/kscdtgwcvwssf6e2hbxj.png"
        alt="rectangle"
        className="rectangle"
      />
      <div>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
