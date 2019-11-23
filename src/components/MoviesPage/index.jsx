import React from 'react';
import { Link, Route } from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage';
import SearchForm from '../SearchForm';
import PropTypes from 'prop-types';

const MoviesPage = ({ filmsList, onSubmit, inputRef, movie }) => {
  return (
    <div>
      <SearchForm onSubmit={onSubmit} inputRef={inputRef} />
      <ul>
        {filmsList.map(({ title, id }) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>)}
      </ul>
      <Route path={'/movies/:movie_id'} render={() => <MovieDetailsPage movie={movie}/>}/>
    </div>
  )
}

MoviesPage.propTypes = {
  movies: PropTypes.array,
  onSubmit: PropTypes.func,
}

MoviesPage.defaultProps = {
  onSubmit: [],
}

export default MoviesPage;