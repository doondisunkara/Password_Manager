import {Component} from 'react'
import './index.css'
import NoPassword from '../NoPassword'

import PasswordItem from '../PasswordItem'

class Password extends Component {
  state = {
    searchInput: '',
    isChecked: false,
  }

  OnDeleteItem = id => {
    console.log(id)
    const {accountDetailsList, UpdateSavedPasswords} = this.props
    const updatedList = accountDetailsList.filter(each => each.id !== id)
    UpdateSavedPasswords(updatedList)
  }

  passwordsRender = searchResults => {
    const {isChecked, searchInput} = this.state
    const {accountDetailsList} = this.props
    const passwordsCount = accountDetailsList.length
    if (passwordsCount > 0 && searchResults.length > 0) {
      return (
        <ul className="passwords-list-container">
          {searchResults.map(eachDetail => (
            <PasswordItem
              OnDeleteItem={this.OnDeleteItem}
              accountDetails={eachDetail}
              searchInput={searchInput}
              isChecked={isChecked}
              key={eachDetail.id}
            />
          ))}
        </ul>
      )
    }
    return <NoPassword />
  }

  checkStatus = event => {
    this.setState({isChecked: event.target.checked})
  }

  OnSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {accountDetailsList} = this.props
    const {isChecked, searchInput} = this.state
    const searchResults = accountDetailsList.filter(each =>
      each.siteName.includes(searchInput.toLowerCase()),
    )
    return (
      <div className="passwords-container">
        <div className="password-heading-container">
          <h1>Your Passwords </h1>
          <p className="password-count">{accountDetailsList.length}</p>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              onChange={this.OnSearchInputChange}
            />
          </div>
        </div>
        <hr />
        <div className="show-password-container">
          <input
            id="showPassword"
            type="checkbox"
            onChange={this.checkStatus}
          />
          <label htmlFor="showPassword">Show Passwords</label>
        </div>
        {this.passwordsRender(searchResults)}
      </div>
    )
  }
}

export default Password
