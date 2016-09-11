export const register = (email, password) => {
  return {
    type: 'AUTH_REGISTER_REQUESTED',
    email,
    password,
  }
}
