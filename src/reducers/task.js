import * as task from '../actions/task'

const init = {
  tasks: [
    {
      id: 0,
      title: 'Worked on Error Handling',
      memo: '',
      completed: false,
      added: '2018-03-16 16:03:03'
    },
    {
      id: 1,
      title: 'Review 4 PR\'s',
      memo: 'BOOKTS-1237',
      completed: false,
      added: '2018-03-17 16:03:03'
    },
    {
      id: 2,
      title: 'Refactored main controller',
      memo: '',
      completed: false,
      added: '2018-03-17 16:03:03'
    }
  ],
  selectedTask: {
    title: ''
  }
}

export default (state = init, action) => {
  switch (action.type) {
    case task.create:
      return state
    case task.get:
      return state
    case task.update:
      return state
    case task.remove:
      return state
    case task.complete:
      return state
    default:
      return state
  }
}
