import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {Colors, AuthorizationStatus, AppRoute, placeCardButtonType} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

import {postFavorite} from '../../store/api-actions';

function FavoritesButton({isFavorite, id, buttonType = placeCardButtonType.card}) {
  const dispatch = useDispatch();
  const auth = useSelector(getAuthorizationStatus);
  const history = useHistory();

  const handleClick = () => {
    if (auth !== AuthorizationStatus.AUTH) {
      history.push(AppRoute.LOGIN);
      return;
    }

    dispatch(postFavorite(id, isFavorite ? 0 : 1));
  };

  return (
    <button className={buttonType.class} type="button" onClick={handleClick}>
      <svg className="place-card__bookmark-icon" width={buttonType.width} height={buttonType.height}
        style={{stroke: isFavorite ? Colors.FAVORITE_CHECKED : Colors.FAVORITE_NOT_CHECKED,
          fill: isFavorite ? Colors.FAVORITE_CHECKED : null}}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

FavoritesButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  buttonType: PropTypes.shape({
    class: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default FavoritesButton;
