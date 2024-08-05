import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./atoms/ErrorPage";
import Layout from "./featured/layout/Layout";
import JobList from "./molekuls/JobList";
import CreateJob from "./templates/CreateJob";
import EditJob from "./templates/EditJob";


const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <JobList />,
      },
      {
        path: "/joblist",
        element: <JobList />,
      },
      {
        path: "/jobcreate",
        element: <CreateJob />,
      },
      {
        path: "/jobedit",
        element: <EditJob />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routers;
