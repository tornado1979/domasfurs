import React, {
  Component,
} from 'react'

import logo from './logo.svg'
import './App.scss'
import Header from './components/header'
import Main from './components/main'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App
