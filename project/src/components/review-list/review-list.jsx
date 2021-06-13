import React from 'react';
import PropTypes from 'prop-types';
import reviewsProp from '../app/reviews.prop';
import ReviewItem from '../review-item/review-item';

function ReviewList({reviews}) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewItem key={review.id} review={review} />,
      )}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewList;
