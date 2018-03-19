import reducer from './task'
import { ADD } from '../actions/task'

describe('Task Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' })
    expect(result).toBeDefined()
  })

  test('add a task', () => {
    const state = {
      tasks: [
        {
          id: 0,
          title: 'Worked on Error Handling',
          memo: '',
          completed: false,
          dateAdded: '2018-03-16 16:03:03'
        },
        {
          id: 1,
          title: 'Review 4 PR\'s',
          memo: 'BOOKTS-1237',
          completed: false,
          dateAdded: '2018-03-17 16:03:03'
        }
      ]
    }
    const newTask = {
      id: 2,
      title: 'Refactored main controller',
      memo: '',
      completed: false,
      dateAdded: '2018-03-17 16:03:03'
    }
    const expectedState = {
      tasks: [
        {
          id: 0,
          title: 'Worked on Error Handling',
          memo: '',
          completed: false,
          dateAdded: '2018-03-16 16:03:03'
        },
        {
          id: 1,
          title: 'Review 4 PR\'s',
          memo: 'BOOKTS-1237',
          completed: false,
          dateAdded: '2018-03-17 16:03:03'
        },
        {
          id: 2,
          title: 'Refactored main controller',
          memo: '',
          completed: false,
          dateAdded: '2018-03-17 16:03:03'
        }
      ]
    }
    const result = reducer(state, { type: ADD, payload: newTask })
    expect(result).toEqual(expectedState)
  })
})
