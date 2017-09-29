import {
  SEARCH_MOVIE_SEND,
  SEARCH_TV_SEND,
  UPDATE_SEARCH_QUERY,
} from './constants';

export function searchMovie (query) {
  return {
    type: SEARCH_MOVIE_SEND,
    query,
  }
}

export function updateSearchQuery (query) {
  return {
    type: UPDATE_SEARCH_QUERY,
    query,
  }
}