export const register = (email, password) => {
  return {
    type: 'AUTH_REGISTER_REQUESTED',
    email,
    password,
  }
}

export const registerSucceeded = result => {
  return {
    type: 'AUTH_REGISTER_SUCCEEDED',
    result,
  }
}

export const registerFailed = ( email, message ) => {
  return {
    type: 'AUTH_REGISTER_FAILED',
    email,
    message,
  }
}

export const login = (email, password) => {
  return {
    type: 'AUTH_LOGIN_REQUESTED',
    email,
    password,
  }
}

export const logout = () => {
  return {
    type: 'AUTH_LOGOUT_REQUESTED',
  }
}

export const restoreUser = ( firebaseUser ) => {
  return {
    type: 'AUTH_LOGIN_SUCCEEDED',
    result: firebaseUser,
  }
}
