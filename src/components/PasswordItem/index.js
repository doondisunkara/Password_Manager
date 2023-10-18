import {Component} from 'react'
import './index.css'

class PasswordItem extends Component {
  render() {
    const {eachDetail} = this.props
    const {site = 'youtube.com', name = 'Rahul', password = 'efgh'} = eachDetail
    return (
      <div className="password-item-container">
        <p className="account-logo-container logo">{name[0]}</p>
        <div className="account-details">
          <h1>{site}</h1>
          <p>{name}</p>
          <p>{password}</p>
        </div>
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
        />
      </div>
    )
  }
}

export default PasswordItem
