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

    if(props.auth.uid){
      this.listenToSettings(props)
    }

    this.state = {
      keyToUpdate: '',
      valueToUpdate: '',
    }
  }

  listenToSettings(props) {
    if(props.auth.uid){
      this.firebaseRefs['settings'] = firebase.database().ref(`/users/${props.auth.uid}/settings`)
      this.firebaseRefs['settings'].on(
        'value',
        snap => this.props.settingsActions.onValueSnapshot( snap )
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.uid && this.props.auth.uid === null) {
      this.listenToSettings(nextProps)
    }
  }

  componentWillUnmount() {
    each( ref => ref.off() )(this.firebaseRefs)
  }

  handleChange( field, event ) {
    const value = event.target.value
    this.setState( { [ field ]: value } )
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

        <div>
          <label> Key </label>
          <input
            type='text'
            onChange={ event => this.handleChange('keyToUpdate', event) }
          />

          <br />
          <label> Value </label>
          <input
            type='text'
            onChange={ event => this.handleChange('valueToUpdate', event) }
          />

          <button onClick={ () => this.props.settingsActions.update(this.firebaseRefs['settings'], { [this.state.keyToUpdate]: this.state.valueToUpdate })} >Update</button>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
