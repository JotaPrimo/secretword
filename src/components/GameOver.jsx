import React from 'react'

import './GameOver.css'

const GameOver = ( {retryGame} ) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retryGame}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver