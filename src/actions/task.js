export const CREATE = '[Task] Create'
export const GET = '[Task] Get'
export const UPDATE = '[Task] Update'
export const REMOVE = '[Task] Remove'
export const COMPLETE = '[Task] Complete'

export const create = (task) => ({
  type: CREATE,
  payload: task
})

export const get = () => ({
  type: GET
})

export const update = (task) => ({
  type: UPDATE,
  payload: task
})

export const remove = (id) => ({
  type: REMOVE,
  payload: id
})

export const complete = (id) => ({
  type: COMPLETE,
  payload: id
})
