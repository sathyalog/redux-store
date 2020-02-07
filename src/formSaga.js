import { put, takeLatest, all } from 'redux-saga/effects';
import * as types from './constants';

function* fetchFormData() {
    const data = yield fetch('https://firebasestorage.googleapis.com/v0/b/redux-store-c6c24.appspot.com/o/mockForm.json?alt=media&token=01c0e030-98c1-4d36-a182-da9839e8cede')
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