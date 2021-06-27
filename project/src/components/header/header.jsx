import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Logo from '../logo/logo';
import AuthUser from '../auth-user/auth-user';
import NoAuthUser from '../no-auth-user/no-auth-user';

import {AuthorizationStatus} from '../../const';

function Header({authorizationStatus}) {
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

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps)(Header);
