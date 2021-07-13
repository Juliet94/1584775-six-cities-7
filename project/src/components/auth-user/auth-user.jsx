import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logout} from '../../store/api-actions';
import {getUserData} from '../../store/user/selectors';

function AuthUser() {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);

  const avatarUrl = user.avatarUrl;
  const email = user.email;

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={avatarUrl} alt="user" />
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.LOGIN}>
          <span
            onClick={handleClick}
            className="header__signout"
          >
            Sign out
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default AuthUser;
