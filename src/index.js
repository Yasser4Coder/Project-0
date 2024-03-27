import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomPage from "./pages/WelcomPage";
import LoginPage from "./pages/LoginPage";
import VersesPage from "./pages/VersesPage";
import HomePage from "./pages/HomePage";
import ScoreBoard from "./pages/ScoreBoard";
import ChallengePage from "./pages/ChallengePage";
import VersePage from "./pages/VersePage";

const router = createBrowserRouter([
  {
    path: "/Project-0",
    element: <WelcomPage />,
  },
  {
    path: "/Project-0/home",
    element: <HomePage />,
  },
  {
    path: "/Project-0/login",
    element: <LoginPage />,
  },
  {
    path: "/Project-0/verses",
    element: <VersesPage />,
  },
  {
    path: "/Project-0/scoreboard",
    element: <ScoreBoard />,
  },
  {
    path: "/Project-0/challenge",
    element: <ChallengePage />,
  },
  {
    path: "/Project-0/verse",
    element: <VersePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
