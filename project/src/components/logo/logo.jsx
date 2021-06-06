import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';

function Logo() {
  return (
    <NavLink className="header__logo-link"
      to={AppRoute.MAIN}
      activeClassName="header__logo-link--active"
      isActive={(match, {pathname}) => !match ? false : pathname === AppRoute.MAIN}
    >
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </NavLink>
  );
}

export default Logo;
