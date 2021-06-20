import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import offersProp from '../../app/offers.prop';

import PlaceCardList from '../../place-card-list/place-card-list';
import Header from '../../header/header';
import MainEmpty from '../../main-empty/main-empty';
import CitiesList from '../../cities-list/cities-list';
import Map from '../../map/map';

import {placeCardPageType} from '../../../const';

function MainPage({offers, city}) {

  return (
    <div className={`${offers.length > 0 ? 'page page--gray' : 'page__main--index-empty page__main--index'} page--main`}>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        { offers.length > 0 ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} {offers.length > 1 ? 'places' : 'place'} to stay in {city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"/>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <PlaceCardList offers={offers} pageType={placeCardPageType.main}/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offers}
                    city={offers[0].city}
                  />
                </section>
              </div>
            </div>
          </div>
        ) : <MainEmpty city={city}/>}
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (dispatch) => ({
  offers: dispatch.offers,
  city: dispatch.city,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
