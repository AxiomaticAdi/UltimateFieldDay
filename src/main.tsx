import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

import ErrorPage from "./pages/ErrorPage.tsx";
import GamesPage from "./pages/GamesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import SubmitGamePage from "./pages/SubmitGamePage.tsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/games",
        element: <GamesPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/submit",
        element: <SubmitGamePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
