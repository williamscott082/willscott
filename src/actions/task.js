export const ADD = '[Task] Add'
export const SELECT = '[Task] Select'

export const selectTask = (task) => ({
  type: SELECT,
  payload: task
})

export const addTask = (task) => ({
  type: ADD,
  payload: task
})
