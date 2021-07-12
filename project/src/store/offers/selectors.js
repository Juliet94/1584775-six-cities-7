import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';
import {getAllOffers} from '../data/selectors';

export const getActiveCityName = (state) => state[NameSpace.OFFERS].activeCityName;
export const getActiveSortType = (state) => state[NameSpace.OFFERS].activeSortType;
export const getActivePlaceCard = (state) => state[NameSpace.OFFERS].activePlaceCard;

export const getActiveCity = createSelector(
  getActiveCityName,
  getAllOffers,
  (activeCityName, allOffers) => allOffers.find((offer) => offer.city.name === activeCityName).city,
);
