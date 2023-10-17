import {Component} from 'react'

import './App.css'
import Password from './components/Password'
import CreatePassword from './components/CreatePassword'

class App extends Component {
  state = {
    accountDetails: {},
  }

  onAddingPassword = details => {
    console.log('Who am I')
  }

  render() {
    const {accountDetails} = this.state
    return (
      <div className="password-manager">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <CreatePassword
          accountDetails={accountDetails}
          onAddingPassword={this.onAddingPassword}
        />
        <Password />
      </div>
    )
  }
}
export default App
