// Write your code here.
const EmojiCard = props => {
  const {givenValue, checkId} = props
  const {id, emojiName, emojiUrl} = givenValue
  const idValue = () => {
    checkId(id)
  }
  return (
    <li className="list-el">
      <button className="custom-btn" type="submit" onClick={idValue}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
