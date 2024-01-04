import About from "../About/About";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import "./index.css";

const Body = () => {
  return (
    <div className="body-container">
      <Header />
      <About />
      <Form />
      <Footer />
    </div>
  );
};

export default Body;
