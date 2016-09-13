import 'babel-polyfill'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers'
import authSaga from './sagas/auth'
import settingsSaga from './sagas/settings'

const initialState = {}

const sagaMiddleware = createSagaMiddleware()

const historyMiddleware = routerMiddleware(browserHistory)

let middleware
if(window.devToolsExtension) {
  middleware = compose(
    applyMiddleware(sagaMiddleware, historyMiddleware),
    window.devToolsExtension()
  )
} else {
  middleware = compose(
    applyMiddleware(sagaMiddleware, historyMiddleware)
  )
}

let store = createStore(rootReducer, initialState, middleware)

sagaMiddleware.run(authSaga)
sagaMiddleware.run(settingsSaga)

export default store
