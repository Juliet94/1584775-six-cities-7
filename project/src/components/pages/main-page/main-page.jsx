import React from 'react';
import {useSelector} from 'react-redux';

import PlaceCardList from '../../place-card-list/place-card-list';
import Header from '../../header/header';
import MainEmpty from '../../main-empty/main-empty';
import CitiesList from '../../cities-list/cities-list';
import Map from '../../map/map';
import SortForm from '../../sort-form/sort-form';

import {placeCardPageType} from '../../../const';
import {sortOffers} from '../../../utils/sort';
import {getOffers} from '../../../store/data/selectors';
import {getActiveCity, getActiveCityName, getActiveSortType} from '../../../store/offers/selectors';

function MainPage() {
  const offers = useSelector(getOffers);
  const cityName = useSelector(getActiveCityName);
  const city = useSelector(getActiveCity);
  const sortType = useSelector(getActiveSortType);

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
                <b className="places__found">{offers.length} {offers.length > 1 ? 'places' : 'place'} to stay in {cityName}</b>
                <SortForm sortType={sortType}/>
                <div className="cities__places-list places__list tabs__content">
                  <PlaceCardList
                    offers={sortOffers(sortType, offers)}
                    pageType={placeCardPageType.main}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offers}
                    city={city}
                  />
                </section>
              </div>
            </div>
          </div>
        ) : <MainEmpty city={cityName}/>}
      </main>
    </div>
  );
}

export default (MainPage);
