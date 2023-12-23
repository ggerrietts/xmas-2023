import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import ErrorPage from "./error-page";
import MainComponent, {pageLoader} from "./main-component";


const router = createHashRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <ErrorPage />,
    },
    {
        path: "/:pagename",
        errorElement: <ErrorPage />,
        element: <MainComponent />,
        loader: pageLoader,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
