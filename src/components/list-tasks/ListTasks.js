import React from 'react'
import { connect } from 'react-redux'
import formatDate from '../../utilities/format-date'
import { selectTask } from '../../actions/task'

const ListTasks = ({tasks, selectTask, selectedTask}) => {
  const completeTask = (event) => {
    tasks
      .filter(task => task.id === parseInt(event.target.value, 10))
      .map(task => {
        if (!task.completed) {
          task.completed = formatDate(new Date())
        } else {
          task.completed = false
        }
        return task
      })
  }

  const isSelectedTask = (task) => {
    return task === selectedTask ? 'active' : ''
  }

  return tasks.map(task => {
    return (
      <li key={task.id}
        className={`${isSelectedTask(task)} task-list`}>
        <input type='checkbox'
          defaultChecked={!!task.completed}
          className='task-checkbox'
          id={'task-' + task.id}
          value={task.id}
          onChange={e => completeTask(e)} />
        <label className='task-label'
          onClick={e => selectTask(task)}>
          {task.title}
        </label>
      </li>
    )
  })
}

export default connect(state => state, { selectTask })(ListTasks)
