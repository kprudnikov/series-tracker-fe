import React from 'react';
import { connect } from 'react-redux';
import { getNewImage } from './actions';
import { imagesBaseUrl } from '../../constants';


class Home extends React.Component {
  render () {
    const { getNewImage, moviesList } = this.props;
    console.log(moviesList);

    return <section>
      <h1>Homepage</h1>
      <button onClick={ getNewImage }>Get new image</button>
      <hr/>
      { moviesList.map((movie, index) =>
        movie.poster_path ?
          <img key={ index } src={ `${imagesBaseUrl}/${movie.poster_path}` } /> :
          ''
      )}

    </section>
  }
}

function mapStateToProps (globalState) {
  const state = globalState.home;
  return {
    imageUrl: state.imageUrl,
    moviesList: state.moviesList,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getNewImage: () => dispatch(getNewImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);