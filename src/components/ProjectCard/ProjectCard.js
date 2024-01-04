import "./index.css";

const ProjectCard = (props) => {
  const { data } = props;
  const { title, description, imageUrl, link } = data;

  const image = imageUrl
    ? imageUrl
    : "https://res.cloudinary.com/sachinbalagam/image/upload/v1704395148/waynrceb32lsabctcank.png";

  return (
    <div className="project-card-container">
      <div className="pp-card-content-container">
        <div className="pp-card">
          <h1 className="pp-card-title">{title}</h1>
          <p className="pp-card-deescription">{description}</p>
          <a href={link} target="_blank" rel="noreferrer">
            <button className="pp-button">View Project</button>
          </a>
        </div>
      </div>
      <div className="pp-card-image-contianer">
        <img src={image} alt={title} className="pp-card-image" />
      </div>
    </div>
  );
};

export default ProjectCard;
