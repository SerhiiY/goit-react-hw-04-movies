import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage';
import SearchForm from '../SearchForm';
import MoviesList from '../MoviesList';
import PropTypes from 'prop-types';
import css from './style.module.scss';
import qs from 'qs';

class MoviesPage extends Component {

  componentDidMount() {
    this.props.fetchMoviesByQuery(this.checkSearchString());
    this.checkSearchString();
  }

  componentDidUpdate(prevProps) {
    this.props.fetchMoviesByQuery(this.checkSearchString(prevProps));
  }

  checkSearchString = (prevProps) => {
    const { location: { search } } = this.props;
    if(prevProps) if (prevProps.location.search === search) return '';

    const parsedSearch = qs.parse(search.slice(1));
    return parsedSearch ? parsedSearch.query : '';
  }

  render() {
    const { moviesList, handleSubmit, match, onInputChange, location } = this.props,
      { url } = match;

    return (
      <div className={css.moviesPage}>
        <SearchForm handleSubmit={handleSubmit} onInputChange={onInputChange} />
        <MoviesList moviesList={moviesList} url={url} location={location} />
        <Route path={`${url}/:movie_id`} render={props => <MovieDetailsPage {...props} />} />
      </div>
    )
  }
 }

MoviesPage.propTypes = {
  moviesList: PropTypes.array,
  onSubmit: PropTypes.func,
  movieInfo: PropTypes.object,
  onLinkClick: PropTypes.func,
}

MoviesPage.defaultProps = {
  moviesList: [],
}

export default MoviesPage;