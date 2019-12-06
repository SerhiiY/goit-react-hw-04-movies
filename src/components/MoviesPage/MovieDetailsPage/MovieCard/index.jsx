import React from 'react';
import css from './style.module.scss';

const MovieCard = ({ movieInfo }) => {
  const { backdrop_path, title, vote_average, overview, genres } = movieInfo || '';

  return (
    <div className={css.movieCard}>
      <img src={backdrop_path && 'https://image.tmdb.org/t/p/w500/' + backdrop_path} alt="MoviePoster" />
      <div className={css.movieCardInfo}>
        <h2>{title}</h2>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres && genres.map(el => el.name).join(', ')}</p>
      </div>
    </div>
  )
}

export default MovieCard;