// css
import "./App.css";

// react
import { useCallback, useEffect, useState } from "react";

// import data
import {wordsList} from "./data/words";

// comporntes
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {

  // CONSTS
  const START = "start";
  const GAME = "game";
  const END = "end";

  // functions check
  const isStart = () => {
    return gameStage === START;
  };

  const isGame = () => {
    return gameStage === GAME;
  };

  const isEnd = () => {
    return gameStage === END;
  };
  // functions check


  // inicializando o stageGame
  const [gameStage, setStageGame] = useState(stages[0].name);
  const [words] = useState(wordsList)

  return (
    <div className="App">
      {isStart && <StartScreen />}
      {isGame === "game" && <Game />}
      {isEnd === "end" && <GameOver />}
    </div>
  );
}

export default App;
