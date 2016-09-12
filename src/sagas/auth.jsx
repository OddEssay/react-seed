import 'babel-polyfill'
import firebase from 'firebase'
import { call, put, fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { push } from 'react-router-redux'

function* registerAuth(action){
  try {
    const email = action.email
    const password = action.password
    const doRegister = () => firebase.auth().createUserWithEmailAndPassword(email, password)

    const register = yield call(doRegister)
    yield put({ type: 'AUTH_REGISTER_SUCCEEDED', result: register })
    yield put( push('/success') )
  } catch(e) {
    yield put({ type: 'AUTH_REGISTER_FAILED', email: action.email, message: e.message })
  }
}

function* loginAuth(action){
  try {
    const email = action.email
    const password = action.password
    const doLogin = () => firebase.auth().signInWithEmailAndPassword(email, password)

    const loginResult = yield call(doLogin)
    yield put({ type: 'AUTH_LOGIN_SUCCEEDED', result: loginResult })
    yield put( push('/success') )
  } catch(e) {
    yield put({ type: 'AUTH_LOGIN_FAILED', email: action.email, message: e.message })
  }
}
function* AuthSaga(){
  yield fork(takeEvery, 'AUTH_REGISTER_REQUESTED', registerAuth )
  yield fork(takeEvery, 'AUTH_LOGIN_REQUESTED', loginAuth )
}

export default AuthSaga
