import React from 'react';
import {useDispatch} from 'react-redux';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';
import offersProp from '../app/offers.prop';

import FavoritesButton from '../favorites-button/favorites-button';

import {changeActiveCard} from '../../store/action';
import {AppRoute, placeCardPageType} from '../../const';
import {getPlaceRatingPercent} from '../../utils/place-card';

function PlaceCard({offer, pageType, setActivePlaceCard, activePlaceCard}) {
  const dispatch = useDispatch();

  const {
    id,
    previewImage,
    price,
    rating,
    title,
    type,
    isFavorite,
    isPremium,
  } = offer;

  const placeRating = getPlaceRatingPercent(rating);

  return (
    <article className={`${pageType.classListElement} place-card`}
      onMouseEnter={pageType.type === placeCardPageType.main.type ? () => {
        setActivePlaceCard(id);
        dispatch(changeActiveCard(id));
      } : null}
      onMouseLeave={pageType.type === placeCardPageType.main.type ? () => {
        activePlaceCard = null;
        dispatch(changeActiveCard(null));
      } : null}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${pageType.classListElementWrapper} place-card__image-wrapper`}>
        <Link to={{pathname: generatePath(AppRoute.OFFER, { id })}}>
          <img className="place-card__image" src={previewImage} width={pageType.cardImageWidth} height={pageType.cardImageHeight} alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton isFavorite={isFavorite} id={id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: placeRating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: generatePath(AppRoute.OFFER, { id })}}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offersProp,
  pageType: PropTypes.object.isRequired,
  setActivePlaceCard: PropTypes.func,
  activePlaceCard: PropTypes.number,
};

export default PlaceCard;
