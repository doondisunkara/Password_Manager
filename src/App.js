import {Component} from 'react'

import './App.css'
import Password from './components/Password'
import CreatePassword from './components/CreatePassword'

class App extends Component {
  state = {
    accountDetailsList: [],
  }

  onAddingPassword = newDetails => {
    console.log(newDetails)
    const {accountDetailsList} = this.state
    console.log(accountDetailsList)
    const updatedList = [...accountDetailsList, newDetails]
    this.setState({accountDetailsList: updatedList})
  }

  render() {
    const {accountDetailsList} = this.state
    let accountDetails
    console.log(accountDetailsList)
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
        <Password accountDetailsList={accountDetailsList} />
      </div>
    )
  }
}

export default App
