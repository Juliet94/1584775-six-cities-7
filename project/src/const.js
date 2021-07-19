export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
};

export const placeCardPageType = {
  main: {
    type: 'main',
    classListElement: 'cities__place-card place-card',
    classListElementWrapper: 'cities__image-wrapper',
    cardImageWidth: 260,
    cardImageHeight: 200,
  },
  offer: {
    type: 'offer',
    classListElement: 'near-places__card place-card',
    classListElementWrapper: 'near-places__image-wrapper',
    cardImageWidth: 260,
    cardImageHeight: 200,
  },
  favorite: {
    type: 'favorite',
    classListElement: 'favorites__card',
    classListElementWrapper: 'favorites__image-wrapper',
    classInfo: 'favorites__card-info',
    cardImageWidth: 150,
    cardImageHeight: 110,
  },
};

export const placeCardButtonType = {
  card: {
    class: 'place-card__bookmark-button button',
    width: 18,
    height: 19,
  },
  offer: {
    class: 'property__bookmark-button button',
    width: 31,
    height: 33,
  },
};

export const Colors = {
  FAVORITE_CHECKED: '#4481c3',
  FAVORITE_NOT_CHECKED: '#979797',
};

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const APIRoute = {
  OFFERS: '/hotels',
  NEARBY_OFFERS: '/nearby',
  REVIEWS: '/comments',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const DEFAULT_CITY = 'Paris';
