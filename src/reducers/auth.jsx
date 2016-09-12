const defaultState = {
  uid: null,
  displayName: null,
  photoURL: null,
  email: null,
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
      }
      return newState
    }
    default: {
      return state
    }
  }
}
export default auth
