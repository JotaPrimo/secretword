// css
import "./App.css";

// react
import { useCallback, useEffect, useState } from "react";

// import data
import { wordsList } from "./data/words";

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
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  // pickWordAndCategory
  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random Word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return { category, word };
  };

  // alterando o gameStage
  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory();

    // create array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category)
    console.log(wordLetters);

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  };

  // process the letter input
  const verifyLetter = (letter) => {
    console.log(letter);

    // limpando valor
  };

  // restarts the game
  const retryGame = () => {
    setGameStage(stages[0].name);
  };

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
      {isStart() && <StartScreen startGame={startGame} />}
      {isGame() && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {isEnd() && <GameOver retryGame={retryGame} />}
    </div>
  );
}

export default App;
