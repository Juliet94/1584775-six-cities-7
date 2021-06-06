import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';

import MainPage from '../pages/main-page/main-page';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App({CityPlaceCardsCount, NearPlaceCardsCount}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage CityPlaceCardsCount={CityPlaceCardsCount}/>
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <OfferPage NearPlaceCardsCount={NearPlaceCardsCount} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  CityPlaceCardsCount: PropTypes.number.isRequired,
  NearPlaceCardsCount: PropTypes.number.isRequired,
};

export default App;
