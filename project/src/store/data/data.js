import {
  loadOffers,
  loadNearbyOffers,
  loadOffer,
  loadReviews,
  setIsOfferDataLoaded,
  setIsDataLoadError,
  fillOffersList
} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_CITY} from '../../const';

const initialState = {
  offers: [],
  allOffers: [],
  nearbyOffers: [],
  offer: {},
  reviews: [],
  isDataLoaded: false,
  isOfferDataLoaded: false,
  isDataLoadError: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      state.offers = action.payload.filter((offer) => offer.city.name === DEFAULT_CITY);
      state.isDataLoaded = true;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = state.allOffers.filter((offer) => offer.city.name === action.payload);
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isOfferDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setIsOfferDataLoaded, (state, action) => {
      state.isOfferDataLoaded = action.payload;
    })
    .addCase(setIsDataLoadError, (state, action) => {
      state.isDataLoadError = action.payload;
    });
});

export {data};
