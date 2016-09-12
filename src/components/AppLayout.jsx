import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import * as authActions from '../actions/auth'

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export class AppLayout extends React.Component {
  static displayName = 'AppLayout'

  static propTypes = {
    children: React.PropTypes.object.isRequired,
    auth: React.PropTypes.object.isRequired,
    authActions: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    autoBind(this)
  }

  handleLogout(){
    this.props.authActions.logout()
  }

  render(){
    const { children, auth } = this.props
    return (
      <div>
        { children }
        <footer>
        {
          auth.uid
          ? <input type='button' onClick={ this.handleLogout } value='Logout' />
          : [ <Link to='login'>Login</Link>, <span> | </span>, <Link to='register'>Register</Link> ]
        }
        </footer>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)
