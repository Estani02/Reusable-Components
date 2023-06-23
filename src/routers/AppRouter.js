import { createBrowserRouter } from "react-router-dom";
import { SideBar } from "../views/SideBar";
import { ErrorPage } from "../views/Error";
import { ButtonsPage } from "../views/ButtonsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/buttons",
        element: <ButtonsPage />,
      },
    ],
  }
])


