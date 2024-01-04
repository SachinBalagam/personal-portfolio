import "./index.css";

const ProjectCard = (props) => {
  const { data } = props;
  const { title, description, imageUrl, link } = data;

  const image = imageUrl
    ? imageUrl
    : "https://res.cloudinary.com/sachinbalagam/image/upload/v1704395148/waynrceb32lsabctcank.png";

  return (
    <div className="pc-container">
      <div className="pc-card">
        <div className="pc-content-container">
          <h1 className="pc-title">{title}</h1>
          <p className="pc-description">{description}</p>
          <a href={link} target="_blank" rel="noreferrer">
            <button className="pc-button">View Project</button>
          </a>
        </div>

        <div className="pc-img-contianer">
          <img src={image} alt={title} className="pc-img" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
