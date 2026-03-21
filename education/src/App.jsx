import React from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./componenet/Home";
import Applayout from "./componenet/Applayout";
import About from "./componenet/About";
import Courses from "./componenet/Courses";
import Internships from "./componenet/Internships";
import Contact from "./componenet/Contact";
import Register from "./componenet/Register";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/course",
        element:<Courses />
      },
      {
        path:"/internship",
        element:<Internships/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;