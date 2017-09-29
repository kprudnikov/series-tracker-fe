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

// private

function get (url, query) {
  return fetch(`${apiBaseUrl}/${url}?api_key=${apiKey}&${jsonToParams(query)}`)
    .then(response => response.json());
}

function jsonToParams (data) {
  return Object.keys(data).map(key => `${encodeURIComponent(key)}=
    ${encodeURIComponent(data[key])}`).join('&');
}