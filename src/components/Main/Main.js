import "./index.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className="title">UI/UX Designer</h1>
        <div className="card">
          <h1 className="heading">Hello, my name is Madelyn Torff</h1>
          <p className="description">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="buttons-contianer">
            <button className="project-button">Projects</button>
            <button className="LinkedIn-button">LinkedIn</button>
          </div>
        </div>
      </div>
      <div className="images-container">
        <img
          src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704387471/enuvg4iaf0ijhnpoleg4.png"
          alt="background"
          className="background-image"
        />
        <img
          src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704387427/c74pk1lq2mu1lytcmzsl.png"
          alt="profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Main;
