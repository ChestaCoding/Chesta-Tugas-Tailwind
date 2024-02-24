import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Eror from "./Home/Eror";
import Website from "./Website";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Website />,
  },
  {
    path: "app",
    element: <App />,
    errorElement: <Eror />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
