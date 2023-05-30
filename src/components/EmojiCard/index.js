import './index.css'

const EmojiCard = props => {
  const {eachItem, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachItem

  const onClickEmoji = () => {
    clickEmoji(id, emojiName)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
