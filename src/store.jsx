import 'babel-polyfill'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import authSaga from './sagas/auth'

const initialState = {}

const sagaMiddleware = createSagaMiddleware()

const middleware = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)

let store = createStore(rootReducer, initialState, middleware)

sagaMiddleware.run(authSaga)

export default store
