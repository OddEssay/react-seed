import React from 'react'
import { bindActionCreators } from 'redux'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { each } from 'lodash/fp'
import firebase from 'firebase'
import { map } from '../../helpers'

import * as settingsActions from '../../actions/settings'

const mapStateToProps = state => {
  return {
    auth: state.auth,
    settings: state.settings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    settingsActions: bindActionCreators(settingsActions, dispatch)
  }
}

export class Profile extends React.Component {
  static displayName = 'Profile'

  static propTypes = {
    auth: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
    settingsActions: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    autoBind(this)
    this.firebaseRefs = {}
    this.firebaseRefs['settings'] = firebase.database().ref(`/users/${props.auth.uid}/settings`)
    this.firebaseRefs['settings'].on(
      'value',
      snap => this.props.settingsActions.onValueSnapshot( snap )
    )
  }

  componentWillUnmount() {
    each( ref => ref.off() )(this.firebaseRefs)
  }

  render(){
    const { displayName, email } = this.props.auth
    const { settings } = this.props
    return (
      <div>
        <div>
          Display Name: { displayName }
        </div>
        <div>
          Email: { email }
        </div>
        <div>
          <h3>Settings</h3>
          <ul>
            {
              map( (setting, key) => <li key={key}><b>{key}:</b> {setting}</li>)(settings)
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
