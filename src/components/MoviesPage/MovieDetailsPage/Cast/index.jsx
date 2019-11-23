import React from 'react';

const Cast = ({ credits }) => (
  <section>
    <ul>
      {credits.map(({ character, name, profile_path }) =>
        <li>
          <img src={'https://image.tmdb.org/t/p/w200' + profile_path} alt="" />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      )}
    </ul>
  </section>
)

export default Cast;