import {Component} from 'react'
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

  render() {
    const {accountDetails, onAddingPassword} = this.props
    const onAddButton = event => {
      event.preventDefault()
      const {siteName, userName, password} = this.state
      if (siteName && userName && password) {
        console.log('Namaste')
        const newDetails = {
          siteName: {siteName},
          userName: {userName},
          password: {password},
        }
        console.log(newDetails)
      }
    }

    return (
      <div className="create-password-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
          alt="password manager"
          className="password-manager-img"
        />
        <form onSubmit={onAddButton()} className="add-container">
          <h1>Add New Password</h1>
          <div className="details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="search"
              className="details-icon"
            />
            <input
              type="text"
              placeholder="Enter Website"
              className="details-input"
              onChange={this.OnSiteChange}
            />
          </div>
          <div className="details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="search"
              className="details-icon"
            />
            <input
              type="text"
              placeholder="Enter Username"
              className="details-input"
              onChange={this.OnUserChange}
            />
          </div>
          <div className="details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="search"
              className="details-icon"
            />
            <input
              type="password"
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
