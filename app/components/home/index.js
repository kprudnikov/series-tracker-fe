import React from 'react';
import { connect } from 'react-redux';
import {
  searchMovie,
  updateSearchQuery,
} from './actions';
import { imagesBaseUrl } from '../../constants';
require('./styles.scss');

class Home extends React.Component {
  updateQuery = (event) => {
    this.props.handleUpdateQuery(event.target.value);
  }

  handleSearchMovieSend = (event) => {
    this.props.searchMovieSend(this.props.searchQuery);
    event.preventDefault();
  }

  render () {
    const {
      moviesList,
      seriesList,
      searchQuery,
    } = this.props;

    return <div>
      <form onSubmit={ this.handleSearchMovieSend }>
        <input type="text" value={ searchQuery } onChange={ this.updateQuery }/>
        <button>Find movie</button>
      </form>
      <hr/>
      <section>
        <h1>Movies</h1>
        <div className="list-wrapper clearfix">
          { moviesList.map((movie, index) =>
            <div className="movie" key={ index }>
              <h2>
                { movie.original_title }
              </h2>
              <p>{ (new Date(movie.release_date)).getFullYear() }</p>
              <div className="image-wrapper">
                { movie.poster_path ?
                  <img src={ `${imagesBaseUrl}${movie.poster_path}` } /> :
                  '' }
              </div>
              <small>{ movie.overview }</small>
            </div>
          )}
        </div>
      </section>
      <section>
        <h1>TV series</h1>
        <div className="list-wrapper clearfix">
          { seriesList.map((series, index) =>
            <div className="series" key={ index }>
              <h2>
                { series.original_name }
              </h2>
              <p>{ (new Date(series.first_air_date)).getFullYear() }</p>
              <div className="image-wrapper">
                { series.poster_path ?
                  <img src={ `${imagesBaseUrl}${series.poster_path}` } /> :
                  '' }
              </div>
              <small>{ series.overview }</small>
            </div>
          )}
        </div>
      </section>
    </div>
  }
}

function mapStateToProps (globalState) {
  const state = globalState.home;
  return {
    imageUrl: state.imageUrl,
    moviesList: state.moviesList,
    seriesList: state.seriesList,
    searchQuery: state.searchQuery,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    searchMovieSend: query => dispatch(searchMovie(query)),
    handleUpdateQuery: query => dispatch(updateSearchQuery(query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);