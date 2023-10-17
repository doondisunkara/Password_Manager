import {Component} from 'react'
import './index.css'
import NoPassword from '../NoPassword'

import PasswordItem from '../PasswordItem'

class Password extends Component {
  state = {
    passwordCount: 1,
  }

  render() {
    const {passwordCount} = this.state
    return (
      <div className="passwords-container">
        <div className="password-heading-container">
          <p>
            Your Passwords{' '}
            <span className="password-count">{passwordCount}</span>
          </p>
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
            />
          </div>
        </div>
        <hr />
        <div className="show-password-container">
          <input id="showPassword" type="checkbox" />
          <label htmlFor="showPassword">Show Passwords</label>
        </div>
        <PasswordItem />
      </div>
    )
  }
}

export default Password
