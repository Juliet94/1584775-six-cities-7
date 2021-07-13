import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CITIES} from '../../const';
import {getActiveCityName} from '../../store/offers/selectors';
import {changeCity, fillOffersList} from '../../store/action';

function CitiesList() {
  const dispatch = useDispatch();
  const city = useSelector(getActiveCityName);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((itemCity) => (
        <li className="locations__item" key={itemCity}>
          <a
            className={`locations__item-link tabs__item ${itemCity === city ? 'tabs__item--active' : ''}`}
            href={`#${itemCity}`}
            onClick={() => {
              dispatch(changeCity(itemCity));
              dispatch(fillOffersList(itemCity));
            }}
          >
            <span>{itemCity}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}

export default CitiesList;
