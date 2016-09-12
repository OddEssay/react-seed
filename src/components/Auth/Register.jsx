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
export class Register extends React.Component {
  static displayName = 'Register'

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

  handleRegister() {
    const { email, password } = this.state
    this.props.authActions.register( email, password )
  }

  render(){
    return (
      <div>
        Register
        <ul>
          {
            map(
              ( error, index ) => <li key={ index }>{ error }</li>
            )(this.props.auth.registrationErrorMessages)
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
            onClick={this.handleRegister}
            value='Register'
          />

        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
