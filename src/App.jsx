import Home from "./Page/Home"
import Itineraries from "./Page/Itineraries";
import SiteUnderConstruction from "./Page/SiteUnderConstruction";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import OtpVerification from "./Page/OtpVerification";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/verify-otp",
    element: <OtpVerification/>,
  },
  {
    path: "/itineraries",
    element: <Itineraries/>,
  },
  {
    path: "/under_development",
    element: <SiteUnderConstruction/>,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}