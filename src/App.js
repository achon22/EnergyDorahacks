/* Welcome to our first contract - HelloWorld!
 * The comments below are provided by Truffle React Box unless noted
 * by beginning with ^^
 * The structure is similar to a standard Truffle React Box install to assist
 * with creating your own project.
 * Don't forget to truffle compile & truffle migrate with Ganache running, and unlock
 * your metamask account with local network selected. :)
 */
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Import our main views
import Home from './components/Home.js'
import Dashboard from './components/Dashboard.js'
import Test from './components/Test.js'
import Marketplace from './components/Marketplace'
// import Dashboard from './components/Dashboard'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={ Home } exact/>
          <Route path="/marketplace" component={ Marketplace } />
          <Route path="/dashboard" component={ Dashboard } />
          <Route path="/test" component={Test}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
