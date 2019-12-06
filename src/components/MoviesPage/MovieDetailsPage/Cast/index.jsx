import React from 'react';
import PropTypes from 'prop-types';
import css from './style.module.scss';

const Cast = ({ credits }) => (
  <div>
    <ul>
      {credits.map(({ character, name, profile_path, id }) => {
        
        const src = profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}`
          : "https://prikolnye-kartinki.ru/img/picture/Sep/21/697113e1bbc73e0d6eb2dfa4af89c1e2/2.jpg"

        return (
          <li key={id} className={css.character}>
            <img src={src} alt="" className={css.img} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        )
      })}
    </ul>
  </div>
)

Cast.propTypes = {
  credits: PropTypes.array,
}

Cast.defaultProps = {
  credits: [],
}

export default Cast;