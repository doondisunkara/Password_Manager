import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CreatePassword extends Component {
  state = {
    siteName: '',
    userName: '',
    password: '',
  }

  OnSiteChange = event => {
    this.setState({siteName: event.target.value})
  }

  OnUserChange = event => {
    this.setState({userName: event.target.value})
  }

  OnPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {siteName, userName, password} = this.state
    const {onAddingPassword} = this.props
    if (siteName && userName && password) {
      const newDetails = {
        id: uuidv4(),
        siteName,
        userName,
        password,
      }
      onAddingPassword(newDetails)
      this.setState({siteName: '', userName: '', password: ''})
    }
  }

  render() {
    const {siteName, userName, password} = this.state
    return (
      <div className="create-password-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
          alt="password manager"
          className="password-manager-img"
        />
        <form onSubmit={this.onAddButton} className="add-container">
          <h1>Add New Password</h1>
          <div className="details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="details-icon"
            />
            <input
              type="text"
              value={siteName}
              placeholder="Enter Website"
              className="details-input"
              onChange={this.OnSiteChange}
            />
          </div>
          <div className="details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="details-icon"
            />
            <input
              type="text"
              value={userName}
              placeholder="Enter Username"
              className="details-input"
              onChange={this.OnUserChange}
            />
          </div>
          <div className="details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="details-icon"
            />
            <input
              type="password"
              value={password}
              placeholder="Enter Password"
              className="details-input"
              onChange={this.OnPasswordChange}
            />
          </div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default CreatePassword
