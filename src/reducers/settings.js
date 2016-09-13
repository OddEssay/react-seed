function settings(state = {}, action){
  switch(action.type) {
    case 'SETTINGS_ON_VALUE': {
      return action.data
    }
    default: {
      return state
    }
  }
}
export default settings
