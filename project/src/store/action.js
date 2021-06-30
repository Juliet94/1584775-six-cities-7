export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILL_OFFERS_LIST: 'main/fillOffersList',
  CHANGE_SORT: 'main/changeSort',
  CHANGE_ACTIVE_CARD: 'placeCard/changeActiveCard',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_NEARBY_OFFERS: 'data/loadNearbyOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEWS: 'data/loadReviews',
  SET_IS_OFFER_DATA_LOADED: 'data/setIsOfferDataLoaded',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  GET_USER_DATA: 'user/getUserData',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillOffersList: (city) => ({
    type: ActionType.FILL_OFFERS_LIST,
    payload: city,
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
  changeActiveCard: (card) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: card,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  setIsOfferDataLoaded: (value) => ({
    type: ActionType.SET_IS_OFFER_DATA_LOADED,
    payload: value,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  getUserData: (userData) => ({
    type: ActionType.GET_USER_DATA,
    payload: userData,
  }),
};
