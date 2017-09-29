import {
  SEARCH_MOVIE_SUCCESS,
  SEARCH_TV_SUCCESS,
  UPDATE_SEARCH_QUERY,
} from './constants';

const initialState = {
  searchQuery: '',
  imageUrl: '',
  moviesList: [],
  seriesList: [],
};

export default function (state=initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        moviesList: action.data.results,
      };
    case SEARCH_TV_SUCCESS:
      return {
        ...state,
        seriesList: action.data.results,
      };
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.query,
      };
    default:
      return initialState;
  }
}

