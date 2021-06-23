import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import offersProp from '../../app/offers.prop';
import reviewsProp from '../../app/reviews.prop';

import PlaceCardList from '../../place-card-list/place-card-list';
import Header from '../../header/header';
import ReviewForm from '../../review-form/review-form';
import ReviewList from '../../review-list/review-list';
import Map from '../../map/map';

import {Colors, placeCardPageType} from '../../../const';
import {getPlaceRatingPercent} from '../../../utils/place-card';
import {ActionCreator} from '../../../store/action';

function OfferPage({offers, reviews, city, changeActiveCard}) {
  const location = useLocation();

  const nearOffers = offers.filter((offerItem) => offerItem.id !== location.state);
  const offer = offers.find((offerItem) => offerItem.id === location.state);

  const {
    images,
    title,
    isPremium,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;

  const placeRating = getPlaceRatingPercent(rating);

  useEffect(() => () => {
    changeActiveCard(null);
  });

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33"
                    style={{stroke: isFavorite ? Colors.FAVORITE_CHECKED : Colors.FAVORITE_NOT_CHECKED,
                      fill: isFavorite ? Colors.FAVORITE_CHECKED : null}}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: placeRating}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((property) =>
                    <li className="property__inside-item" key={property}>{property}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && (
                    <span className="property__user-status">
                    Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map" >
            <Map
              offers={offers}
              city={city}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardList offers={nearOffers} pageType={placeCardPageType.offer}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  city: PropTypes.string.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
  city: state.city,
});

const mapDispatchToProps = {
  changeActiveCard: ActionCreator.changeActiveCard,
};

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
