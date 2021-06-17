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

export const Colors = {
  FAVORITE_CHECKED: '#4481c3',
  FAVORITE_NOT_CHECKED: '#979797',
};
