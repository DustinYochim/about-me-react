import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import AboutMe from "./pages/AboutMe";
import { Hobbies } from "./pages/Hobbies";
import { Pets } from "./pages/Pets";
import "./reset.css";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      {
        path: "/hobbies",
        element: <Hobbies />,
      },
      {
        path: "/pets",
        element: <Pets />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<RouterProvider router={router} />);
