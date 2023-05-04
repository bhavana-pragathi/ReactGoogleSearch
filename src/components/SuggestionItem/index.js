import './index.css'

const SuggestionItem = props => {
  const {searchDetails} = props
  const {suggestion, id} = searchDetails

  return (
    <li>
      <p>{suggestion}</p>
      <img
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
