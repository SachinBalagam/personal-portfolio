import "./index.css";

const ProjectListFooter = () => {
  return (
    <div>
      <div className="pl-footer-container">
        <div className="icons-container">
          <a
            href="https://www.linkedin.com/in/sachinbalagam/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704397517/dbeyiokhv5a6dd6bf0zg.png"
              alt="linkedin"
              className="social-logo"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704397517/fvycwcsu6rmetjucreib.png"
              alt="instagram"
              className="social-logo"
            />
          </a>
          <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704397517/qfcdy2futzfvei6nj890.png"
              alt="mail"
              className="social-logo"
            />
          </a>
        </div>
        <p className="pl-footer-description">
          Copyright © 2024. All rights reserved
        </p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/sachinbalagam/image/upload/v1704390771/rqedaypzateciqteilda.png"
          alt="footer-border"
        />
      </div>
    </div>
  );
};

export default ProjectListFooter;
