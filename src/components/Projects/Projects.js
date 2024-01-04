import { useSelector } from "react-redux";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./index.css";
import Header from "../Header/Header";
import ProjectListFooter from "../ProjectListFooter/ProjectListFooter";

const Projects = () => {
  const projectsList = useSelector((store) => store.projects.projectsList);
  return (
    <div className="project-page-container">
      <Header />
      <h2 className="pp-heading">Projects</h2>
      <img
        src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704390133/kscdtgwcvwssf6e2hbxj.png"
        alt="rectangle"
        className="rectangle"
      />
      <div>
        {projectsList.map((each, index) => (
          <ProjectCard data={each} key={index} />
        ))}
      </div>
      <ProjectListFooter />
    </div>
  );
};

export default Projects;
