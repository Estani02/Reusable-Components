import { createBrowserRouter } from "react-router-dom";
import { SideBar } from "../views/SideBar";
import { ErrorPage } from "../views/ErrorPage";
import { ButtonPage } from "../views/ButtonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/buttons",
        element: <ButtonPage />,
      },
    ],
  }
])


