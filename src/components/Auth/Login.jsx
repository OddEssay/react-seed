import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/auth'
import { map } from '../../helpers'

const mapStateToProps = ( state ) => {
  return {
    auth: state.auth,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  }
}
export class Login extends React.Component {
  static displayName = 'Login'

  static propTypes = {
    authActions: React.PropTypes.object.isRequired,
    auth: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    autoBind(this)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange(field, event) {
    const value = event.target.value
    this.setState( { [ field ]: value } )
  }

  handleLogin() {
    const { email, password } = this.state
    this.props.authActions.login( email, password )
  }

  render(){
    window.map = map
    return (
      <div>
        Login
        <ul>
          {
            map(
              ( error, index ) => <li key={ index }>{ error }</li>
            )( this.props.auth.loginErrorMessages )
          }
        </ul>
        <form>
          <label>Email</label>
          <input
            type='text'
            defaultValue={this.props.auth.email}
            onChange={ event => this.handleChange('email', event) }
          />

          <br />

          <label>Password</label>
          <input
            type='password'
            onChange={ event => this.handleChange('password', event) }
          />

          <br />

          <input
            type='button'
            onClick={this.handleLogin}
            value='Login'
          />

        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
