import { useState } from "react";
import "../styles/App.css";
import Board from "./Board";
import Scoreboard from "./Scoreboard";
import GameOver from "./GameOver";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(null);
  const [bestScore, setBestScore] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  return (
    <>
      <Scoreboard />
      <Board />
      {gameOver && <GameOver />}
    </>
  );
}

export default App;
