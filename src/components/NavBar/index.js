import './index.css'

const NavBar = props => {
  const {score, topScore, condition} = props

  let scoreText
  let topScoreText
  if (condition === false) {
    scoreText = <p className="score">Score: {score}</p>
    topScoreText = <p className="score top-score">Top Score: {topScore}</p>
  }

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      <div className="score-container">
        {scoreText}
        {topScoreText}
      </div>
    </div>
  )
}
export default NavBar
