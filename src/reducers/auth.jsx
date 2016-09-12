const defaultState = {
  uid: null,
  displayName: null,
  photoURL: null,
  email: null,
  registrationErrorMessages: [],
}

function auth(state = defaultState, action){
  switch(action.type) {
    case 'AUTH_REGISTER_SUCCEEDED': {
      const { uid, displayName, photoURL, email } = action.result
      const newState = {
        ...state,
        uid,
        displayName,
        photoURL,
        email,
        registrationErrorMessages: [],
      }
      return newState
    }
    case 'AUTH_REGISTER_FAILED': {
      const { email, message } = action
      const newState = {
        ...state,
        email,
        registrationErrorMessages: [ message ],
      }
      return newState
    }
    default: {
      return state
    }
  }
}
export default auth
