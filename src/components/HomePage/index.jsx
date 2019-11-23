import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Homepage = ({ filmsList }) => (
  <section>
    <ul>
      {filmsList.map(({ title, id }) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>)}
    </ul>
  </section>
)

Homepage.propTypes = {
  filmsList: PropTypes.array,
}

Homepage.defaultProps = {
  filmsList: [],
}

export default Homepage;
