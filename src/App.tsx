import MainPage from './pages/main-page';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import SignInPAge from './pages/SignInPage';
import MyListPage from './pages/my-list-page';
import FilmPage from './pages/film-page';
import AddReviewPage from './pages/add-review-page';
import PlayerPage from './pages/player-page';
import NotFoundPage from './pages/not-found-page';
import PrivateRoute from './components/private-route';
import { CommonProps } from './types/types';
import { AppRoute } from './const/const';


const App = (props : CommonProps) =>
  // const nav = useNavigate();
  // console.log(nav);
  (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage {...props}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPAge/>}
        />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute>
            <MyListPage myListArray={props.catalogFilmCards}/>
          </PrivateRoute>
        }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage {...props.filmCardData} tabData={props.tabData} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage {...props.filmCardData}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage {...props.playerData}/>}
        />
        <Route
          path='*'
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
export default App;
