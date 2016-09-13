import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import 'babel-polyfill'

function* updateSettings( action ){
  try {
    const update = data => action.ref.update(data)
    yield call( update, action.data )
    // Note: The data is read where ever your 'on' listeners are, NOT from this result.
    // If no data changes, the 'on' listeners don't fire.
    yield put( { type: 'SETTINGS_UPDATE_SUCCEEDED' } )
  } catch( e ) {
    yield put( { type: 'SETTINGS_UPDATE_FAILED', message: e.message } )
  }
}

function* settingsSaga(){
  yield* takeEvery( 'SETTINGS_UPDATE_REQUESTED', updateSettings )
}

export default settingsSaga
