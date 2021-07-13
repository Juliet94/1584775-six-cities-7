import {combineReducers} from '@reduxjs/toolkit';
import {offers} from './offers/offers';
import {user} from './user/user';
import {data} from './data/data';

export const NameSpace = {
  OFFERS: 'OFFERS',
  DATA: 'DATA',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
