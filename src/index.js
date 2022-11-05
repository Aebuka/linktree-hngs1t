import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contacts",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
