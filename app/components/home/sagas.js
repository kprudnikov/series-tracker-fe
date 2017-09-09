import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api';

function* findMovie (action) {
  try {
    const data = yield call(api.searchMovie, 'Mad Max');
    console.log();
    yield put({type: "SEARCH_MOVIE_SUCCESS", data});
  } catch (e) {
    console.log('Error');
    yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* homeSagas() {
  yield takeEvery('GET_NEW_IMAGE', findMovie);
}

export default homeSagas;