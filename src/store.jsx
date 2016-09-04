import { createStore, compose } from 'redux'
import rootReducer from './reducers'

const initialState = {}

const middleware = compose(
  window.devToolsExtension && window.devToolsExtension()
)

let store = createStore(rootReducer, initialState, middleware)

export default store
