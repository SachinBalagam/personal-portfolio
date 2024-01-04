import { useRef, useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { addProject } from "../../utils/projectsSilce";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [showError, setShowError] = useState(false);

  const title = useRef();
  const link = useRef();
  const description = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onProjectAdd = (e) => {
    e.preventDefault();
    if (
      title.current.value !== "" &&
      link.current.value !== "" &&
      description.current.value !== ""
    ) {
      console.log(title.current.value);
      dispatch(
        addProject({
          title: title.current.value,
          link: link.current.value,
          description: description.current.value,
        })
      );
      navigate("/projects");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="footer-container">
      <h1 className="footer-title">Add Project</h1>
      <img
        src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704390133/kscdtgwcvwssf6e2hbxj.png"
        alt="rectangle"
        className="rectangle"
      />
      <div className="form-container">
        <form className="form" onSubmit={onProjectAdd}>
          <label className="label" htmlFor="PName">
            Project Name
          </label>
          <input className="input" type="text" id="PName" ref={title} />
          <label className="label" htmlFor="PLink">
            Project Link
          </label>
          <input className="input" type="text" id="PLink" ref={link} />
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="text-area"
            ref={description}
          ></textarea>
          {showError && <p className="error-message">Enter All Fields</p>}
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
