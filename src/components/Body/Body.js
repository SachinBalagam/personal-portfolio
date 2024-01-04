import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./index.css";

const Body = () => {
  return (
    <div className="body-container">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
