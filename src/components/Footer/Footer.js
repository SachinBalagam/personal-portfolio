import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-title">Add Project</h1>
      <img
        src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704390133/kscdtgwcvwssf6e2hbxj.png"
        alt="rectangle"
        className="rectangle"
      />
      <div className="form-container">
        <form className="form">
          <label className="label" htmlFor="PName">
            Project Name
          </label>
          <input className="input" type="text" id="PName" />
          <label className="label" htmlFor="PLink">
            Project Link
          </label>
          <input className="input" type="text" id="PLink" />
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea id="description" className="text-area"></textarea>
          <button type="submit" className="submit-button">
            Add
          </button>
        </form>
      </div>
      <div className="footer-border">
        <img
          src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704390771/rqedaypzateciqteilda.png"
          alt="footer-border"
        />
      </div>
    </div>
  );
};

export default Footer;
