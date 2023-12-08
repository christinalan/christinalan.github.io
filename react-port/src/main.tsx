import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import ErrorPage from './error-page'
import MapLibs from './components/MapLibs.tsx'
import Birbs from './components/Birbs.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Maplibs",
        element: <MapLibs />,
      },
      {
        path: "birbs",
        element: <Birbs />,
      },
      // {
      //   path: "releases",
      //   element: <Releases />,
      // },
      // {
      //   path: "shop",
      //   element: <Shop />,
      // },
      // {
      //   path: "contact",
      //   element: <Contact />,
      // }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
