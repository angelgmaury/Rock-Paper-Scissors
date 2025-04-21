import Header from "./components/Header";
import GameBoard from "./components/Gameboard";
import RulesModal from "./components/RulesModal";
import ResultScreen from "./components/ResultScreen";
import { useState, useEffect } from "react";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [playerPick, setPlayerPick] = useState(null);
  const [housePick, setHousePick] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("rps-score");
    return savedScore !== null ? parseInt(savedScore) : 0;
  });

  const options = ["rock", "paper", "scissors"];

  useEffect(() => {
    localStorage.setItem("rps-score", score.toString());
  }, [score]);

  const determineResult = (player, house) => {
    if (player === house) return "draw";
    if (
      (player === "rock" && house === "scissors") ||
      (player === "paper" && house === "rock") ||
      (player === "scissors" && house === "paper")
    ) {
      setScore((prev) => prev + 1);
      return "you win";
    } else {
      setScore((prev) => Math.max(0, prev - 1));
      return "you lose";
    }
  };

  const handlePick = (pick) => {
    setPlayerPick(pick);
    const random = options[Math.floor(Math.random() * options.length)];
    setHousePick(random);
    const outcome = determineResult(pick, random);
    setResult(outcome);
  };

  const handlePlayAgain = () => {
    setPlayerPick(null);
    setHousePick(null);
    setResult(null);
  };

  return (
    <div className="bg-gradient-to-b from-[#1f3756] to-[#141539] w-full min-h-screen p-4 pb-20 relative">
      <Header score={score} />

      <div className="flex flex-col items-center">
        {playerPick ? (
          <ResultScreen
            playerPick={playerPick}
            housePick={housePick}
            result={result}
            onPlayAgain={handlePlayAgain}
          />
        ) : (
          <GameBoard onPick={handlePick} />
        )}
      </div>

      {/* Botón RULES - Centrado en móvil, a la derecha en desktop */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center md:justify-end md:right-6">
        <button
          onClick={() => setShowRules(true)}
          className="border-2 border-white text-white px-10 py-2 rounded-lg uppercase tracking-wider hover:bg-white hover:text-[#3b4363] transition"
        >
          Rules
        </button>
      </div>

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  );
}

export default App;
