import MainPage from './pages/main-page';
import {
  Routes,
  Route,
} from 'react-router-dom';
import SignInPage from './pages/sign-in-page';
import MyListPage from './pages/my-list-page';
import FilmPage from './pages/film-page';
import AddReviewPage from './pages/add-review-page';
import PlayerPage from './pages/player-page/player-page';
import NotFoundPage from './pages/not-found-page';
import PrivateRoute from './components/private-route';
import { AppRoute } from './const/const';
import browserHistory from './utils/browser-history';
import HistoryRouter from './components/history-router';

const App = () => (
  <HistoryRouter history={browserHistory}>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.SignIn}
        element={<SignInPage/>}
      />
      <Route path={AppRoute.MyList} element={
        <PrivateRoute>
          <MyListPage/>
        </PrivateRoute>
      }
      />
      <Route
        path={AppRoute.Film}
        element={<FilmPage />}
      />
      <Route
        path={AppRoute.AddReview}
        element={
          <PrivateRoute>
            <AddReviewPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Player}
        element={<PlayerPage />}
      />
      <Route
        path='*'
        element={<NotFoundPage/>}
      />
    </Routes>
  </HistoryRouter>
);
export default App;
