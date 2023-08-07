import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Company from "./Components/Company/Company";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/About Us/AboutUs";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "*",
        element: <Navigate to={""} />,
      },
    ],
  },
]);

export default routes;
