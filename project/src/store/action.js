import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'offers/changeCity',
  CHANGE_SORT: 'offers/changeSort',
  CHANGE_ACTIVE_CARD: 'offers/changeActiveCard',
  FILL_OFFERS_LIST: 'data/fillOffersList',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_NEARBY_OFFERS: 'data/loadNearbyOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_FAVORITES: 'data/loadFavorites',
  UPDATE_FAVORITES: 'data/updateFavorites',
  SET_IS_DATA_LOAD_ERROR: 'data/setIsDataLoadError',
  SET_IS_OFFER_DATA_LOADED: 'data/setIsOfferDataLoaded',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  GET_USER_DATA: 'user/getUserData',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const fillOffersList = createAction(ActionType.FILL_OFFERS_LIST, (city) => ({
  payload: city,
}));

export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort,
}));

export const changeActiveCard = createAction(ActionType.CHANGE_ACTIVE_CARD, (card) => ({
  payload: card,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (favorites) => ({
  payload: favorites,
}));

export const updateFavorites = createAction(ActionType.UPDATE_FAVORITES, (favorites) => ({
  payload: favorites,
}));

export const setIsOfferDataLoaded = createAction(ActionType.SET_IS_OFFER_DATA_LOADED, (value) => ({
  payload: value,
}));

export const setIsDataLoadError = createAction(ActionType.SET_IS_DATA_LOAD_ERROR, (value) => ({
  payload: value,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const getUserData = createAction(ActionType.GET_USER_DATA, (userData) => ({
  payload: userData,
}));
