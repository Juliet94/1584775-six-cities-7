import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';
import Logo from '../../logo/logo';

function NotFoundPage() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <section style={{margin: '0 auto'}}>
        <h1>404 Page Not Found</h1>
        <Link to={AppRoute.MAIN}>
          Вернуться на главную
        </Link>
      </section>
    </div>
  );
}

export default NotFoundPage;
