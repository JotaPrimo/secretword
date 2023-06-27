import React from "react";

import "./Game.css";

function Game({ verifyLetter }) {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000000 </span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica.... </span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span> 
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
        <span>A,</span>
      </div>
    </div>
  );
}

export default Game;
