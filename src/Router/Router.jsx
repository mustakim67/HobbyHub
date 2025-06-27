import { createBrowserRouter } from "react-router";
import Mainlayout from "../MainLayout/Mainlayout";
import Login from "../Components/Login";
import Home from "../Components/Home";
import Register from "../Components/Register";
import AllGroups from "../Components/AllGroups";
import PrivateRoutes from "./PrivateRoutes";
import MyGroups from "../Components/MyGroups";
import CreateGroup from "../Components/CreateGroup";
import GroupDetails from "../Components/GroupDetails";
import Error from "../Components/Error";
import Support from "../Components/Support";
import About from "../Components/About";
import DashboardLayout from "../Components/DashBoard/DashBoardLayout";
import DashboardHome from "../Components/DashBoard/DashBoardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/all-groups",
        loader: () =>
          fetch("https://hobby-hub-server-ebon.vercel.app/groups"),
        element: <AllGroups />,
      },
      {
        path: "/my-groups",
        loader: () =>
          fetch("https://hobby-hub-server-ebon.vercel.app/groups"),
        element: (
          <PrivateRoutes>
            <MyGroups />
          </PrivateRoutes>
        ),
      },
      {
        path: "/create-group",
        element: (
          <PrivateRoutes>
            <CreateGroup />
          </PrivateRoutes>
        ),
      },
      {
        path: "/group-details/:id",
        loader: () =>
          fetch("https://hobby-hub-server-ebon.vercel.app/groups"),
        element: (
          <PrivateRoutes>
            <GroupDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
    ],
  },
 {
  path: "/dashboard",
  element:<PrivateRoutes><DashboardLayout /></PrivateRoutes> ,
  children: [
    {
      index: true,
       loader: () =>
        fetch("https://hobby-hub-server-ebon.vercel.app/groups"),
      element: <DashboardHome />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "all-groups",
      loader: () =>
        fetch("https://hobby-hub-server-ebon.vercel.app/groups"),
      element: <AllGroups />,
    },
    {
      path: "my-groups",
      loader: () =>
        fetch("https://hobby-hub-server-ebon.vercel.app/groups"),
      element: (
        <PrivateRoutes>
          <MyGroups />
        </PrivateRoutes>
      ),
    },
    {
      path: "create-group",
      element: (
        <PrivateRoutes>
          <CreateGroup />
        </PrivateRoutes>
      ),
    },
    {
      path: "support",
      element: <Support />,
    },
    {
      path: "about-us",
      element: <About />,
    },
  ],
}
]);

export default router;
