import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import store from './store'

const HelloMessage = React.createClass({
  render() {
    return <div>Hello {this.props.params.name}</div>
  }
})

const AppLayout = (props) => <div>{props.children}</div>

const App = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
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
