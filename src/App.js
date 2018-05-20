import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import './App.scss'
import { Header } from './components/header/index'
import { Footer } from './components/footer'
// import Main from './components/main'

import { Routes } from './components/routes'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes />
          <Footer
            bgTemplate="template1" // background template
          />
        </Fragment>
      </Router>
    </div>
  )
}

export default App
