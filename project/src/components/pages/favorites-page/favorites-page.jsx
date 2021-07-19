import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from '../../header/header';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';

import {AppRoute} from '../../../const';
import {getFavorites} from '../../../store/data/selectors';

function FavoritesPage() {
  const favoriteOffers = useSelector(getFavorites);

  if (favoriteOffers.length === 0) {
    return <FavoritesEmpty />;
  }

  const favoritesUniqueCities = new Set();
  favoriteOffers.forEach((offer) => favoritesUniqueCities.add(offer.city.name));

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoriteOffers={favoriteOffers} favoritesUniqueCities={favoritesUniqueCities} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
