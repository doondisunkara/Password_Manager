import {Component} from 'react'
import './index.css'
import NoPassword from '../NoPassword'

class Password extends Component {
  render() {
    return (
      <div className="password_container">
        <div className="password-heading-container">
          <p>
            Your Passwords <span>0</span>
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
        <div className="password-details">
          <NoPassword />
        </div>
      </div>
    )
  }
}

export default Password
