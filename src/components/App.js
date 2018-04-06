import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import TaskList from './taskList/TaskList'
import TaskEdit from './taskEdit/TaskEdit'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Route path='/tasks' component={TaskList} />
          <Route path='/task/edit/:id' component={TaskEdit} />
        </div>
      </Router>
    )
  }
}
