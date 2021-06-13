import React, {useState} from 'react';
import PropTypes from 'prop-types';
import offersProp from '../app/offers.prop';
import PlaceCard from '../place-card/place-card';

function PlaceCardList({offers, pageType}) {
  const [activePlaceCard, setActivePlaceCard] = useState(null);

  return(
    <>
      {offers.map((offer) =>
        <PlaceCard key={offer.id} offer={offer} pageType={pageType} setActivePlaceCard={setActivePlaceCard} activePlaceCard={activePlaceCard} />)}
    </>
  );
}

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  pageType: PropTypes.object.isRequired,
};

export default PlaceCardList;
