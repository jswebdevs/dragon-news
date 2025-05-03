import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";



//Pages 
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/HomePage";
import SingleNewsPage from "../pages/SingleNewsPage";

import Register from "../components/Register";
import Login from "../components/Login";
import Account from "../pages/AccountPage";


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
        path: "account",
        element: <Account></Account>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "login",
        element: <Login></Login>
      }
    ],
  },
]);

export default Routes;