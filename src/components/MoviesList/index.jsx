import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ moviesList, url, location }) =>  (
  <ul>
    {moviesList.map(({ title, id }) =>
      <li key={id}>
        <Link to={{ pathname: `${url}/${id}`, state: { ...location } }} id={id}>
          {title}
        </Link>
      </li>
    )}
  </ul>
)

MoviesList.propTypes = {
  moviesList: PropTypes.array,
  url: PropTypes.string,
  location: PropTypes.object,
}

MoviesList.defaultProps = {
  moviesList: [],
  url: '/',
  location: {pathname: '/'},
}


export default MoviesList;