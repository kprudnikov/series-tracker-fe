import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api';
import {
  SEARCH_MOVIE_SEND,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_ERROR,
  SEARCH_TV_SUCCESS,
  SEARCH_TV_ERROR,
} from './constants';

function* findMovie (action) {
  try {
    const moviesData = yield call(api.searchMovie, action.query);
    const seriesData = yield call(api.searchTVSeries, action.query);
    yield put({type: SEARCH_MOVIE_SUCCESS, data: moviesData});
    yield put({type: SEARCH_TV_SUCCESS, data: seriesData});
  } catch (e) {
    yield put({type: SEARCH_MOVIE_ERROR, message: e.message});
    yield put({type: SEARCH_TV_ERROR, message: e.message});
  }
}

function* homeSagas() {
  yield takeLatest(SEARCH_MOVIE_SEND, findMovie);
}

export default homeSagas;