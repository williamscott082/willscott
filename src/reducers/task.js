import { ADD, SELECT } from '../actions/task'

const intiState = {
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

export default (state = intiState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, tasks: state.tasks.concat(action.payload) }
    case SELECT:
      return { ...state, selectedTask: action.payload }
    default:
      return state
  }
}
