import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { App, ErrorPage, Home, Contact, Shop, About } from "./components/index";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "",
            element: <Home />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/shop",
            element: <Shop />,
         },
         {
            path: "/about",
            element: <About />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
