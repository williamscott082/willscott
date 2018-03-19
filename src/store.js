import { createStore } from 'redux'
import taskReducer from './reducers/task'

export default createStore(taskReducer)
