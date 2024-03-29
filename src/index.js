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
    element: <VersesPage  />,
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
    path: "/One-piece",
    element: <VersePage title={"One Piece"} para={"Vegapunk resolved to create the solution's mind and discovered that the Gorosei held the relevant data."}/>,
  },
  {
    path: "/Sherlock",
    element: <VersePage title={"Sherlock HOlmes"} para={"At Vegapunk's request, Sherlock set off on a mission to track down five renowned scientists: Marie Curie, Nikola Tesla, Guglielmo Marconi, James Moriarty, and Charles Babbage, in order to build a quantum computer."}/>,
  },
  {
    path: "/Watch-dogs",
    element: <VersePage title={"WatcH DOgS"} para={"Aiden Pearce, who was initially uninterested, became involved after making a deal with Doctor Strange. Pearce pledged to find top-tier hacker defense measures in his reality in exchange for information on his daughter's murderers. Doctor Strange insisted on this precaution to preserve the technology they were developing."}/>,
  },  
  {
    path: "/Dr-strange",
    element: <VersePage title={"Dr StrangE"} para={"Doctor Strange's powers dwindled following the tragedy, and his attempts to reclaim them led him to recollect a forgotten spell. To master it, he needed to gather certain components and knowledge."}/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
