import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body/Body";
import "./App.css";
import Projects from "./components/Projects/Projects";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
