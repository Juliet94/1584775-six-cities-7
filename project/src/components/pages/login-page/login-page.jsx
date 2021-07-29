import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../header/header';

import {login} from '../../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {getAuthorizationStatus} from '../../../store/user/selectors';

function LoginPage() {
  const dispatch = useDispatch();
  const auth = useSelector(getAuthorizationStatus);
  const history = useHistory();
  const [password, setPassword] = useState('');

  if (auth === AuthorizationStatus.AUTH) {
    history.push(AppRoute.MAIN);
  }

  const emailRef = useRef(null);

  const handleChange = (evt) => {
    setPassword(evt.target.value.trim());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: emailRef.current.value,
      password: password,
    }));

    history.push(AppRoute.MAIN);
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="true"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={handleChange}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required="true"
                  value={password}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" href="#" to={AppRoute.MAIN}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
