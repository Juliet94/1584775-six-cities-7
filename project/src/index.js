import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import offers from './mocks/offers';
import reviews from './mocks/reviews';

const NEAR_PLACE_CARDS_COUNT = 3;

ReactDOM.render(
  <React.StrictMode>
    <App
      nearPlaceCardsCount = {NEAR_PLACE_CARDS_COUNT}
      offers = {offers}
      reviews = {reviews}
    />,
  </React.StrictMode>,
  document.getElementById('root'),
);
