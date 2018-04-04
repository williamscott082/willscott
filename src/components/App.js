import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import About from './about/About'
import Contact from './contact/Contact'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <header className='app-header'>
          <p>This is the header</p>
        </header>
        <main className='app-main'>
          <Router>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Router>
        </main>
        <footer className='app-footer'>
          <p>This is the footer</p>
        </footer>
      </div>
    )
  }
}
