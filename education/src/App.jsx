import React from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./componenet/Home";
import Applayout from "./componenet/Applayout";
import About from "./componenet/About";

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
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;