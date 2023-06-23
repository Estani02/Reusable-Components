import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './views/Error/index.jsx'
import { ButtonPage } from './views/ButtonPage/index.jsx'
import { ColorPage } from './views/ColorPage/index.jsx'
import { TypographyPage } from './views/TypographyPage/index.jsx'
import { SpacePage } from './views/SpacePage/index.jsx'
import { InputPage } from './views/InputPage/index.jsx'
import { GridPage } from './views/GridPage/index.jsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/buttons",
        element: <ButtonPage />,
      },
      {
        path: "/colors",
        element: <ColorPage />,
      },
      {
        path: "/typography",
        element: <TypographyPage />,
      },
      {
        path: "/spaces",
        element: <SpacePage />,
      },
      {
        path: "/inputs",
        element: <InputPage />,
      },
      {
        path: "/grid",
        element: <GridPage />,
      },
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
