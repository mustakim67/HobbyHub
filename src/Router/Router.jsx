import { createBrowserRouter } from "react-router";
import Mainlayout from "../MainLayout/Mainlayout";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
  },
]);

export default router;