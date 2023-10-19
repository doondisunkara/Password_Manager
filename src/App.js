import {Component} from 'react'

import './App.css'
import Password from './components/Password'
import CreatePassword from './components/CreatePassword'

class App extends Component {
  state = {
    accountDetailsList: [],
  }

  UpdateSavedPasswords = updatedList => {
    console.log(updatedList)
    this.setState({accountDetailsList: updatedList})
  }

  onAddingPassword = newDetails => {
    console.log(newDetails)
    const {accountDetailsList} = this.state
    console.log(accountDetailsList)
    const updatedList = [...accountDetailsList, newDetails]
    this.setState(prevState => ({
      accountDetailsList: updatedList,
      passwordsCount: prevState.passwordsCount + 1,
    }))
  }

  render() {
    const {accountDetailsList, passwordsCount} = this.state
    console.log(passwordsCount)
    return (
      <div className="password-manager">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <CreatePassword onAddingPassword={this.onAddingPassword} />
        <Password
          UpdateSavedPasswords={this.UpdateSavedPasswords}
          accountDetailsList={accountDetailsList}
        />
      </div>
    )
  }
}

export default App
