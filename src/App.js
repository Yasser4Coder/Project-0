import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomPage from "./pages/WelcomPage";
import LoginPage from "./pages/LoginPage";
import VersesPage from "./pages/VersesPage";
import HomePage from "./pages/HomePage";
import ScoreBoard from "./pages/ScoreBoard";
import ChallengePage from "./pages/ChallengePage";
import VersePage from "./pages/VersePage";
import ChallengeInput from "./components/ChallengeInput";
import ChallengeSolved from "./components/ChallengeSolved";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verses" element={<VersesPage />} />
          <Route path="/scoreboard" element={<ScoreBoard />} />
          <Route
            path="/challenge"
            element={<ChallengePage status={<ChallengeInput />} />}
          />
          <Route
            path="/challenge!solved"
            element={<ChallengePage status={<ChallengeSolved />} />}
          />
          <Route path="/verses/:id" element={<VersePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
