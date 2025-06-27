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


const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    errorElement:<Error></Error>,
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
        loader:()=>fetch('https://hobby-hub-server-ebon.vercel.app/groups'),
        Component:AllGroups
      },
      {
        path:'/my-groups',
         loader:()=>fetch('https://hobby-hub-server-ebon.vercel.app/groups'),
        element:<PrivateRoutes><MyGroups></MyGroups></PrivateRoutes>
      },
      {
        path:'/create-group',
        element:<PrivateRoutes><CreateGroup></CreateGroup></PrivateRoutes>
      },
      {
        path:'/group-details/:id',
        loader:()=>fetch('https://hobby-hub-server-ebon.vercel.app/groups'),
        element:<PrivateRoutes><GroupDetails></GroupDetails></PrivateRoutes>
      },
      {
        path:'/support',
        Component:Support
      },
      {
        path:'/about-us',
        Component:About
      }
    ]
  },
]);

export default router;