import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'

import * as authActions from '../../actions/auth'

const mapDispatchToProps = (dispatch) => {
  return {
    authActions,
  }
}
export class Register extends React.Component {
  static displayName = 'Register'

  static propTypes = {
    authActions: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)
    autoBind(this)
  }

  render(){
    return (
      <div>
        Register
      </div>
    )
  }
}

export default connect(undefined, mapDispatchToProps)(Register)
