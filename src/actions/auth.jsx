export const register = (email, password) => {
  return {
    type: 'AUTH_REGISTER_REQUESTED',
    email,
    password,
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
