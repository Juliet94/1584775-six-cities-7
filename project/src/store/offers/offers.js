import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSort, changeActiveCard} from '../action';
import {SortType, DEFAULT_CITY} from '../../const';

const initialState = {
  activeCityName: DEFAULT_CITY,
  activeSortType: SortType.POPULAR,
  activePlaceCard: null,
};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeSortType = SortType.POPULAR;
      state.activeCityName = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.activeSortType = action.payload;
    })
    .addCase(changeActiveCard, (state, action) => {
      state.activePlaceCard = action.payload;
    });
});

export {offers};
