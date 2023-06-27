import React from 'react'

import './Game.css'

function Game({ verifyLetter }) {
  return (
    <div>
      <h2>Game</h2>
      <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  )
}

export default Game