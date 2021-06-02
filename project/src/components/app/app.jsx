import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App({placeCardsCount}) {
  return (
    <MainPage placeCardsCount={placeCardsCount}/>
  );
}

App.propTypes = {
  placeCardsCount: PropTypes.number.isRequired,
};

export default App;
