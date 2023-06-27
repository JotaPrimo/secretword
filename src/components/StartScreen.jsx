import "./StartScreen";


function StartScreen({ startGame }) {
  return (
    <div className="start">
        <h2>StartScreen</h2>
        <p>Clique no botão abaixo para começar o jogo</p>
        <button onClick={startGame}>Clique para começar</button>
    </div>
  )
}

export default StartScreen