import React, {
  Component,
} from 'react'

import './App.scss'
import { Header } from './components/header/index'
import Main from './components/main'
import { Footer } from './components/footer'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Main />
        <Footer
          bgTemplate = 'template1' // background template
        />
      </div>
    )
  }
}

export default App
