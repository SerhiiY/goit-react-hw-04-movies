import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import css from './style.module.scss';
import PropTypes from 'prop-types';

const MovieDetailsPage = ({ movie }) => {
  
  const { backdrop_path, title, vote_average, overview, genres } = movie;
  const img_url = backdrop_path ? 'https://image.tmdb.org/t/p/w500' + backdrop_path : '';

  const genresNames = genres ? genres.reduce((acc, el) => acc + el.name + ', ', '').slice(-2) : '';

  return (
    <div>
      <section className={css.movieCard}>
        <img src={img_url} alt="MoviePoster" />
        <atricle className={css.movieCardInfo}>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresNames}</p>
        </atricle>
      </section>
      <section>
        <p>Additional information</p>
        <Link to='/movies/cast'>Cast</Link>
        <Link to='/movies/reviews'>Reviews</Link>
      </section>
      <Switch>
        <Route path='/movies/cast' component={Cast} />
        <Route path='/movies/reviews' component={Reviews} />
      </Switch>
    </div>
  )
}

MovieDetailsPage.propTypes = {
  movie: PropTypes.object,
}

MovieDetailsPage.defaultProps = {
  movie: {},
}

export default MovieDetailsPage;