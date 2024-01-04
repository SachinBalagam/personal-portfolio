import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "../Body/Body";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Root = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Root;
