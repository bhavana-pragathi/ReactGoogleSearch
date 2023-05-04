import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-bg">
        <img
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="search-container">
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            type="text"
            className="input-element"
            placeholder="Search Google"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
        </div>
        <ul className="search-list">
          {searchResults.map(eachItem => (
            <SuggestionItem key={eachItem.id} searchDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
