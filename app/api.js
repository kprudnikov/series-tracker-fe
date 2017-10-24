import { apiBaseUrl } from './constants';
const apiKey = require(`../env/${process.env.NODE_ENV}/keys`).apiKey;

export default {
  searchMovie,
  searchTVSeries,
}

function searchMovie (query) {
  return get('search/movie', { query });
}

function searchTVSeries (query) {
  return get('search/tv', { query });
}

function getMovieById(id) {
  return get(`movie/${id}`);
}

function getSeriesById(id) {
  return get(`tv/${id}`);
}

// private
const emptyObject = {};

function get (url, query) {
  query = query || emptyObject;
  return fetch(`${apiBaseUrl}/${url}?api_key=${apiKey}&${jsonToParams(query)}`)
    .then(response => response.json());
}

function jsonToParams (data) {
  return Object.keys(data).map(key => `${encodeURIComponent(key)}=
    ${encodeURIComponent(data[key])}`).join('&');
}