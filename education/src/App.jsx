import React from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./componenet/Home";
import Applayout from "./componenet/Applayout";
import About from "./componenet/About";
import Courses from "./componenet/Courses";
import Internships from "./componenet/Internships";
import Contact from "./componenet/Contact";
import Register from "./componenet/Register";
import Login from "./componenet/Login";
import Blog from "./componenet/Blog";
import Opencourse from "./componenet/Opencourse";

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
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/opencourse/:id",
        element:<Opencourse/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;