import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export class Profile extends React.Component {
  static displayName = 'Profile'

  static propTypes = {
    auth: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)
    autoBind(this)
  }

  render(){
    const { displayName, email } = this.props.auth
    return (
      <div>
        <div>
          Display Name: { displayName }
        </div>
        <div>
          Email: { email }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Profile)
