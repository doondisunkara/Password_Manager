import {Component} from 'react'

import './App.css'
import Password from './components/Password'
import CreatePassword from './components/CreatePassword'

class App extends Component {
  render() {
    return (
      <div className="password-manager">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <CreatePassword />
        <Password />
      </div>
    )
  }
}
export default App
