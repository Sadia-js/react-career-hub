import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Blog from "./components/Blog/Blog";
import Details from "./components/Details/Details";
import { ToastContainer} from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch("jobs.json")
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/job/:jobId",
        loader: ()=> fetch("jobs.json"), // don't load all data for specific data. This is not a good idea 
        element: <Details></Details>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
