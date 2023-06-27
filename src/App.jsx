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

  // inicializando o stageGame
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  // alterando o gameStage
  const startGame = () => {    
    setGameStage(stages[1].name)    
  };

  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // restarts the game
  const retryGame = () => {
    setGameStage(stages[0].name);   
  }

  // functions check stage
  function isStart() {
    return gameStage === START;
  }

  function isGame() {
    return gameStage === GAME;
  }

  function isEnd() {
    return gameStage === END;
  }


  return (
    <div className="App">
      { isStart() && <StartScreen startGame={startGame} /> }
      { isGame() && <Game verifyLetter={verifyLetter} /> }
      { isEnd() && <GameOver retryGame={retryGame} /> }
    </div>
  );
}

export default App;
