import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import offersProp from '../app/offers.prop';
import {getPlaceRatingPercent} from '../../utils/place-card';

function PlaceCard({isMainPage, offer}) {
  const {
    previewImage,
    price,
    rating,
    title,
    type,
    isFavorite,
  } = offer;

  const placeRating = getPlaceRatingPercent(rating);

  return (
    <article className={isMainPage ? 'cities__place-card place-card' : 'near-places__card place-card'}>
      <div className={isMainPage ? 'cities__image-wrapper place-card__image-wrapper' : 'near-places__image-wrapper place-card__image-wrapper'}>
        <Link href="#" to={AppRoute.OFFER}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19" style={{stroke: `${isFavorite ? '#4481c3' : '#979797'}`}}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: placeRating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link href="#" to={AppRoute.OFFER}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offersProp,
  isMainPage: PropTypes.bool.isRequired,
};

export default PlaceCard;
