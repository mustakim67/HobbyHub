import { createBrowserRouter } from "react-router";
import Mainlayout from "../MainLayout/Mainlayout";
import Login from "../Components/Login";
import Home from "../Components/Home";
import Register from "../Components/Register";


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
      }
    ]
  },
]);

export default router;