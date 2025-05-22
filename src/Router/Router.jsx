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


const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children:[
      {
        index:true,
        Component:Login
      },
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/register",
        Component:Register
      },
      {
        path:"/home",
        Component:Home
      },
      {
        path:'/all-groups',
        loader:()=>fetch('http://localhost:3000/groups'),
        Component:AllGroups
      },
      {
        path:'/my-groups',
        element:<PrivateRoutes><MyGroups></MyGroups></PrivateRoutes>
      },
      {
        path:'/create-group',
        element:<PrivateRoutes><CreateGroup></CreateGroup></PrivateRoutes>
      },
      {
        path:'/group-details/:id',
        loader:()=>fetch('http://localhost:3000/groups'),
        element:<PrivateRoutes><GroupDetails></GroupDetails></PrivateRoutes>
      }
    ]
  },
]);

export default router;