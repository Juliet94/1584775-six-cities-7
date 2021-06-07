import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const CITY_PLACE_CARDS_COUNT = 5;
const NEAR_PLACE_CARDS_COUNT = 3;

ReactDOM.render(
  <React.StrictMode>
    <App
      cityPlaceCardsCount = {CITY_PLACE_CARDS_COUNT}
      nearPlaceCardsCount= {NEAR_PLACE_CARDS_COUNT}
    />,
  </React.StrictMode>,
  document.getElementById('root'),
);
