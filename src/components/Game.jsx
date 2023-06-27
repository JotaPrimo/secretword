import React from "react";

import "./Game.css";

function Game({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score} </span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span> {pickedCategory} </span>
      </h3>
      <p>Você ainda tem {guesses} tentativas </p>
      <div className="wordContainer">
      {letters.map((letter, i) => {
        guessedLetters.includes(letter) ? ( 
        <span key={i} className="letter">A</span>) :
         (
         <span key={i} className="blankSquare"></span>)})
         }
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar a letra</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letra já utilizadas</p>
        { wrongLetters.map((wrontLetter, index) => {
          <span key={index}>{wrontLetter}</span>
        })}
        
      </div>
    </div>
  );
}

export default Game;
