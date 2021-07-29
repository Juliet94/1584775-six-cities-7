import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {SortType} from '../../const';
import {changeSort} from '../../store/action';

const sorts = Object.values(SortType);

function SortForm({sortType}) {
  const dispatch = useDispatch();
  const [sortIsOpen, setSortIsOpen] = useState(false);

  const toggleSort = () => setSortIsOpen(!sortIsOpen);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleSort}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`${sortIsOpen ? 'places__options--opened' : ''} places__options places__options--custom`}>
        {sorts.map((sort) => (
          <li
            key={sort}
            className={`${sortType === sort ? 'places__option--active' : ''} places__option`}
            tabIndex="0"
            onClick={() => {
              dispatch(changeSort(sort));
              toggleSort();
            }}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

SortForm.propTypes = {
  sortType: PropTypes.string.isRequired,
};

export default SortForm;
