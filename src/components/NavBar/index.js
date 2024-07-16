// Write your code here.
const NavBar = props => {
  const {scoreValue, topValue, navFull} = props
  if (navFull) {
    return (
      <div className="nav-bar">
        <div className="logo-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
          />
          <p className="logo-para">Emoji Game</p>
        </div>
      </div>
    )
  }
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1 className="logo-para">Emoji Game</h1>
      </div>
      <div className="logo-container">
        <p className="score-para">Score: {scoreValue}</p>
        <p className="score-para">Top Score: {topValue}</p>
      </div>
    </div>
  )
}

export default NavBar
