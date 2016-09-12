import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCl_OeML7FedsYANoSWL2pcn1gUuwnEIQI',
  authDomain: 'my-awesome-app-c884f.firebaseapp.com',
  databaseURL: 'https://my-awesome-app-c884f.firebaseio.com',
  storageBucket: 'my-awesome-app-c884f.appspot.com',
}
firebase.initializeApp(config)

import store from './store'
const history = syncHistoryWithStore(browserHistory, store)

import { HelloMessage } from './components/HelloMessage'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

const AppLayout = (props) => <div>{props.children}</div>
AppLayout.propTypes = {
  children: React.PropTypes.object.isRequired,
}

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={AppLayout}>
          <IndexRoute component={HelloMessage} />
          <Route path='/register' component={ Register } />
          <Route path='/login' component={ Login } />
          <Route path='/:name' component={HelloMessage} />
        </Route>
      </Router>
    </Provider>
  )
}

const mountNode = document.getElementById('app')

ReactDOM.render(<App />, mountNode)
