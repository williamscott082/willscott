import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTask } from '../../actions/task'
import formatDate from '../../utilities/format-date'

class AddTask extends Component {
  constructor (props) {
    super(props)

    this.state = { title: '' }
  }

  componentWillReceiveProps () {
    this.setState({ title: this.props.selectedTask.title })
  }

  addTask (evt) {
    evt.preventDefault()
    this.props.addTask({
      id: 5,
      title: this.state.title,
      completed: false,
      added: formatDate(new Date())
    })
  }

  updateTask (evt) {
    this.setState({ title: evt.target.value })
  }

  render () {
    return (
      <form className='search-cont'
        onSubmit={(evt) => this.addTask(evt)}>
        <input type='text'
          className='search-input'
          placeholder='What are you busy with?'
          value={this.state.title}
          onChange={evt => this.updateTask(evt)} />
        <button className='search-button'
          type='submit'>Add</button>
      </form>
    )
  }
}

AddTask.propTypes = {
  addTask: PropTypes.func,
  selectedTask: PropTypes.obj
}

export default connect(({ selectedTask }) => ({ selectedTask }), { addTask })(AddTask)
