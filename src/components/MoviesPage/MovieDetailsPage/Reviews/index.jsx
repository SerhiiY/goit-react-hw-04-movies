import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => (
  <div>
      {!reviews[0] && <h3>There isn't any reviews</h3>}
      <ul>
        {reviews.map(({ author, content, id }) =>
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        )}
      </ul>
  </div>
)


Reviews.propTypes = {
  reviews: PropTypes.array,
}

Reviews.defaultProps = {
  reviews: [],
}


export default Reviews;