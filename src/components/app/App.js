import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddTask from '../add-task/AddTask'
import ListTasks from '../list-tasks/ListTasks'
import './App.css'

export default class App extends Component {
  addTask (task) {
    this.props.tasks.concat(task)
  }

  render () {
    return (
      <div className='app'>
        <header className='app-header'>
          <AddTask />
        </header>
        <main>
          <h4>Monday, 19 March 2018</h4>
          <ul>
            <ListTasks />
          </ul>
        </main>
      </div>
    )
  }
}
