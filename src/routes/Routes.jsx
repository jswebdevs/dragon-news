import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";



//Pages 
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SingleNewsPage from "../pages/SingleNewsPage";
import Login from "../pages/Login";
import Register from "../pages/Register";




const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path:"career",
        element: <div>This is career</div>
      },
      {
        path: "about",
        element: <div>This is about</div>
      },
      {
        path: "/:title",
        element: <SingleNewsPage></SingleNewsPage>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ],
  },
]);

export default Routes;