import {Component} from 'react'
import './index.css'

class PasswordItem extends Component {
  OnDelete = () => {
    const {accountDetails, OnDeleteItem} = this.props
    const {id} = accountDetails
    OnDeleteItem(id)
  }

  render() {
    const {accountDetails, isChecked} = this.props
    const {siteName, userName, password} = accountDetails
    return (
      <li className="password-item-container">
        <p className="account-logo-container logo">
          {userName[0].toUpperCase()}
        </p>
        <div className="account-details">
          <p>{siteName}</p>
          <p>{userName}</p>
          {isChecked ? (
            <p>{password}</p>
          ) : (
            <img
              className="stars-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
        <button
          className="delete-btn"
          data-testid="delete"
          onClick={this.OnDelete}
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default PasswordItem
