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
import Trail from "../Articles/Trail";
import Kayaking from "../Articles/Kayaking";
import Photography from "../Articles/Photography";
import Book from "../Articles/Book";

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
          fetch("http://localhost:3000/groups"),
        element: <AllGroups />,
      },
      {
        path: "/my-groups",
        loader: () =>
          fetch("http://localhost:3000/groups"),
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
          fetch("http://localhost:3000/groups"),
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
      {
        path: "/explore-trails",
        element: <Trail></Trail>,
      },
      {
        path: "/kayaking",
        element: <Kayaking></Kayaking>,
      },
      {
        path: "/photography-basics",
        element: <Photography></Photography>,
      },
      {
        path: "/books-vibe",
        element: <Book></Book>,
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
        fetch("http://localhost:3000/groups"),
      element: <DashboardHome />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "all-groups",
      loader: () =>
        fetch("http://localhost:3000/groups"),
      element: <AllGroups />,
    },
    {
      path: "my-groups",
      loader: () =>
        fetch("http://localhost:3000/groups"),
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
