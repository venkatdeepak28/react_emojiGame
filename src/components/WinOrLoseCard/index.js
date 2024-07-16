// Write your code here.
const WinLoseCard = props => {
  const {isTrue, clickChange} = props
  let win = 'Lose'
  let img

  const changePage = () => {
    clickChange()
  }

  if (isTrue === 12) {
    win = 'Won'
    img = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    img = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  return (
    <div className="bg-container">
      <div className="won-container">
        <div className="inner-container">
          <div className="text-container">
            <h1 className="won-heading">You {win}</h1>
            <p className="won-para">Best Score</p>
            <p className="won-para extra">{isTrue}/12</p>
            <button className="win-btn" type="submit" onClick={changePage}>
              Play Again
            </button>
          </div>
          <div>
            <img className="won-logo" src={img} alt="win or lose" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinLoseCard
