import { FormEvent, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { HeaderStyleType } from '../const/const';
import { useAppDispatch } from '../hooks/use-app-selector';
import { loginAction } from '../store/api-action';

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


const SignInPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useAppDispatch();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailPattern.test(login) && (/[a-z]/i.test(password) && /[0-9]/.test(password))) {
      dispatch(loginAction({
        login: login,
        password: password,
      }));
    }
  };

  return (
    <div className="user-page">
      <Header headerStyleType={HeaderStyleType.User}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>

  );
};

export default SignInPage;
