import { put, takeLatest, all } from 'redux-saga/effects';
import * as types from './constants';

function* fetchFormData() {
    const data = yield fetch('https://firebasestorage.googleapis.com/v0/b/redux-store-c6c24.appspot.com/o/mockForm.json?alt=media&token=7c98bc90-c245-4fa6-821a-2695a11453d6')
        .then(response => response.json() );      
    yield put({ type: types.GET_FORMDATA_RECEIVED, data: data });
}

function* actionWatcher() {
    yield takeLatest(types.GET_FORMDATA, fetchFormData);
}

export default function* formSaga() {
   yield all([
       actionWatcher(),
   ]);
}