import React from 'react';
import PropTypes from 'prop-types';

const RATINGS = [
  {
    title: 'perfect',
    id: 5,
  },
  {
    title: 'good',
    id: 4,
  },
  {
    title: 'not bad',
    id: 3,
  },
  {
    title: 'badly',
    id: 2,
  },
  {
    title: 'terribly',
    id: 1,
  },
];

function ReviewRatingStars({handleRatingChange, rateChecked}) {
  return (
    <div className="reviews__rating-form form__rating" onChange={handleRatingChange}>
      {RATINGS.map((rate) => (
        <React.Fragment key={rate.id}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={rate.id}
            id={`${rate.id}-stars`}
            type="radio"
            checked={rateChecked === rate.id}
          />
          <label htmlFor={`${rate.id}-stars`} className="reviews__rating-label form__rating-label" title={rate.title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

ReviewRatingStars.propTypes = {
  handleRatingChange: PropTypes.func.isRequired,
  rateChecked: PropTypes.number.isRequired,
};

export default ReviewRatingStars;
