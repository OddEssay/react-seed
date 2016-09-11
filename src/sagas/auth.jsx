import 'babel-polyfill'
import firebase from 'firebase'
import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

function* registerAuth(action){
  try {
    const email = action.email
    const password = action.password
    const doRegister = () => firebase.auth().createUserWithEmailAndPassword(email, password)

    const register = yield call(doRegister)
    yield put({ type: 'AUTH_REGISTER_SUCCEEDED', result: register })
  } catch(e) {
    yield put({ type: 'AUTH_REGISTER_FAILED', message: e.message })
  }
}

function* AuthSaga(){
  yield* takeEvery( 'AUTH_REGISTER_REQUESTED', registerAuth)
}

export default AuthSaga
