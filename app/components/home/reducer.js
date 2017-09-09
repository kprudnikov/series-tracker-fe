const initialState = {
  imageUrl: 'http://a.espncdn.com/combiner/i?img=/i/espn/teamlogos/500/instant_awesome.png',
  moviesList: [],
};

export default function (state=initialState, action) {
  switch (action.type) {
    case 'GET_NEW_IMAGE':
      return {
        ...initialState,
        imageUrl: 'http://www.planwallpaper.com/static/images/1886374.jpg',
      };
    case 'SEARCH_MOVIE_SUCCESS':
      console.log(action.data.results);
      const state = {
        ...initialState,
        moviesList: action.data.results,
      };

      console.log(state);

      return state;
    default:
      return initialState;
  }
}

