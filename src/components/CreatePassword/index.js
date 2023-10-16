import {Component} from 'react'
import './index.css'

class CreatePassword extends Component {
  render() {
    return (
      <div className="create-password-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
          alt="password manager"
          className="password-manager-img"
        />
        <div className="add-container">
          <h1>Add New Password</h1>
          <div className="details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="search"
              className="details-icon"
            />
            <input type="text" className="details-input" />
          </div>
          <div className="details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="search"
              className="details-icon"
            />
            <input type="text" className="details-input" />
          </div>
          <div className="details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="search"
              className="details-icon"
            />
            <input type="text" className="details-input" />
          </div>
          <button type="button" className="add-btn">
            Add
          </button>
        </div>
      </div>
    )
  }
}

export default CreatePassword
