import "./index.css";

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="pp-card-content-container">
        <div className="pp-card">
          <h1 className="pp-card-title">Hello</h1>
          <p className="pp-card-deescription">
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button className="pp-button">View Project</button>
        </div>
      </div>
      <div className="pp-card-image-contianer">
        <img
          src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704392304/dkgb0inwabtecu4vkvnw.png"
          alt="project-1"
          className="pp-card-image"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
