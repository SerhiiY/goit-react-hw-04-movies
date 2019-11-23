import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => (
  <section>
    <ul>
      {reviews.map(({ author, content, id }) =>
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      )}
    </ul>
  </section>
)


Reviews.propTypes = {
  reviews: PropTypes.array,
}

Reviews.defaultProps = {
  reviews: [],
}


export default Reviews;