import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './style.module.scss'
import MoviesList from '../MoviesList';


class Homepage extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const { moviesList, location } = this.props;
    return (
      <section className={css.homePage}>
        <MoviesList moviesList={moviesList} location={location} url={'/movies'} />
      </section>
    )
  }
};

Homepage.propTypes = {
  moviesList: PropTypes.array,
}


Homepage.defaultProps = {
  moviesList: [],
}

export default Homepage;
