import 'babel-polyfill'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers'
import authSaga from './sagas/auth'

const initialState = {}

const sagaMiddleware = createSagaMiddleware()

const historyMiddleware = routerMiddleware(browserHistory)

const middleware = compose(
  applyMiddleware(sagaMiddleware, historyMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)

let store = createStore(rootReducer, initialState, middleware)

sagaMiddleware.run(authSaga)

export default store
