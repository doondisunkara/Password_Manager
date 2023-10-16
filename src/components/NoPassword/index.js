import {Component} from 'react'
import './index.css'

class NoPassword extends Component {
  render() {
    return (
      <div className="NoPassword_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="NoPassword-img"
        />
        <p>No Passwords</p>
      </div>
    )
  }
}

export default NoPassword
