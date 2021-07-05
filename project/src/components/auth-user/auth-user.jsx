import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logout} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';

function AuthUser({onClick, email, avatarUrl, getUserData}) {
  const handleClick = () => {
    onClick(logout);
    getUserData({});
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

AuthUser.propTypes = {
  onClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ userData: { email, avatarUrl } }) => ({
  email,
  avatarUrl,
});

const mapDispatchToProps = {
  onClick: logout,
  getUserData: ActionCreator.getUserData,
};

export {AuthUser};
export default connect(mapStateToProps, mapDispatchToProps)(AuthUser);
