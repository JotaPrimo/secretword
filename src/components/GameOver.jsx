import React from 'react'

import './GameOver.css'

const GameOver = ( {retryGame, score} ) => {
  return (
    <div>
      <h1>GameOver</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>!
      </h2>
      <button onClick={retryGame}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver