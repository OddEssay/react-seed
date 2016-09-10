import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'
const history = syncHistoryWithStore(browserHistory, store)

import { HelloMessage } from './components/HelloMessage'

const AppLayout = (props) => <div>{props.children}</div>

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={AppLayout}>
          <IndexRoute component={HelloMessage} />
          <Route path='/:name' component={HelloMessage} />
        </Route>
      </Router>
    </Provider>
  )
}

const mountNode = document.getElementById('app')

ReactDOM.render(<App />, mountNode)
