import {Component} from 'react'

import './App.css'
import Password from './components/Password'
import CreatePassword from './components/CreatePassword'

class App extends Component {
  render() {
    return (
      <>
        <CreatePassword />
        <Password />
      </>
    )
  }
}
export default App
