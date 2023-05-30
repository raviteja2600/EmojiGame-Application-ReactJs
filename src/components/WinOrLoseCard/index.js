import './index.css'

const WinOrLossCard = props => {
  const {score, clickPlayAgainButton} = props

  const onClickPlayAgainButton = () => {
    clickPlayAgainButton()
  }

  return (
    <div className="win-or-loss-card">
      {score === 12 ? (
        <>
          <div className="card-count-container">
            <h1 className="card-heading">You Won</h1>
            <p className="card-score">Best Score</p>
            <p className="card-score-count">{score}/12</p>
            <button
              type="button"
              className="card-button"
              onClick={onClickPlayAgainButton}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="card-image"
          />
        </>
      ) : (
        <>
          <div className="card-count-container">
            <h1 className="card-heading">You Lose</h1>
            <p className="card-score">Score</p>
            <p className="card-score-count">{score}/12</p>
            <button
              type="button"
              className="card-button"
              onClick={onClickPlayAgainButton}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="card-image"
          />
        </>
      )}
    </div>
  )
}
export default WinOrLossCard
