/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojiIdsList: [],
    condition: false,
  }

  clickEmoji = id => {
    const {emojiIdsList, score} = this.state
    if (emojiIdsList.includes(id) === false) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        emojiIdsList: [...prevState.emojiIdsList, id],
      }))
    } else {
      this.setState({
        condition: true,
      })
    }
    if (score + 1 === 12) {
      this.setState({
        condition: true,
      })
    }
  }

  clickPlayAgainButton = () => {
    const {score, topScore} = this.state
    const userTopScore = score > topScore ? score : topScore
    this.setState({
      condition: false,
      score: 0,
      topScore: userTopScore,
      emojiIdsList: [],
    })
  }

  render() {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    const {score, topScore, condition} = this.state
    return (
      <div className="container">
        <NavBar score={score} topScore={topScore} condition={condition} />
        <div className="lists-container">
          {condition ? (
            <WinOrLossCard
              score={score}
              clickPlayAgainButton={this.clickPlayAgainButton}
            />
          ) : (
            <ul className="list-items">
              {shuffledEmojisList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  eachItem={eachItem}
                  clickEmoji={this.clickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
