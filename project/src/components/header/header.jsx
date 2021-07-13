import React from 'react';
import {useSelector} from 'react-redux';

import Logo from '../logo/logo';
import AuthUser from '../auth-user/auth-user';
import NoAuthUser from '../no-auth-user/no-auth-user';

import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.AUTH ? <AuthUser /> : <NoAuthUser />}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
