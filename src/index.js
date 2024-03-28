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
import ChallengeInput from "./components/ChallengeInput";
import ChallengeSolved from "./components/ChallengeSolved";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/verses",
    element: <VersesPage />,
  },
  {
    path: "/scoreboard",
    element: <ScoreBoard />,
  },
  {
    path: "/challenge",
    element: <ChallengePage status={<ChallengeInput />} />,
  },
  {
    path: "/challenge!solved",
    element: <ChallengePage status={<ChallengeSolved />} />,
  },
  {
    path: "/verse",
    element: <VersePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
