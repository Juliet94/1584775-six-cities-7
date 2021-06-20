import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {CITIES} from '../../const';
import {ActionCreator} from '../../store/action';

function CitiesList({city, changeCity, fillOffersList}) {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((itemCity) => (
        <li className="locations__item" key={itemCity}>
          <a
            className={`locations__item-link tabs__item ${itemCity === city ? 'tabs__item--active' : ''}`}
            href={`#${itemCity}`}
            onClick={() => {
              changeCity(itemCity);
              fillOffersList(itemCity);
            }}
          >
            <span>{itemCity}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  fillOffersList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
  fillOffersList: ActionCreator.fillOffersList,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

