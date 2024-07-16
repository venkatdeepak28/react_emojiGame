/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinLoseCard from '../WinOrLoseCard'
import './index.css'

const idArray = []

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, idValue: idArray, isWin: false, prevScore: 0}

  changeNav = () => {
    this.setState({isWin: false})
  }

  checkId = id => {
    const {idValue} = this.state
    let checkClicked
    if (idValue.length !== 0) {
      checkClicked = idValue.filter(eachValue => eachValue === id)
    } else {
      checkClicked = false
    }

    if (idValue.length === 11) {
      if (checkClicked.length === 0) {
        this.setState(prevState => ({
          topScore: prevState.idValue.length + 1,
          prevScore: prevState.score + 1,
          score: 0,
          idValue: [],
          isWin: true,
        }))
      }
    }

    if (checkClicked.length === 1) {
      this.setState(prevState => ({
        topScore: prevState.idValue.length,
        prevScore: prevState.score,
        score: 0,
        idValue: [],
        isWin: true,
      }))
    } else {
      console.log(checkClicked)
      this.setState(prevState => ({
        idValue: [...prevState.idValue, id],
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    let winLose
    const {score, topScore, idValue, isWin, prevScore} = this.state
    const {emojisList} = this.props
    console.log(idValue)
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    if (isWin) {
      winLose = <WinLoseCard isTrue={prevScore} clickChange={this.changeNav} />
    } else {
      winLose = shuffledEmojisList.map(eachValue => (
        <EmojiCard
          key={eachValue.id}
          givenValue={eachValue}
          checkId={this.checkId}
        />
      ))
    }

    return (
      <div className="bg-container">
        <NavBar navFull={isWin} scoreValue={score} topValue={topScore} />
        <div className="emoji-container">
          <ul className="list-prop">{winLose}</ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
