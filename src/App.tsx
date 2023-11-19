import MainPage from './main-page';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import SignInPAge from './SignInPage';
import MyListPage from './my-list-page';
import FilmPage from './film-page';
import AddReviewPage from './add-review-page';
import PlayerPage from './player-page';
import NotFoundPage from './not-found-page';
import PrivateRoute from './components/private-route';
import { IMockDataFilms } from './types/films';


type Props = {
  name: string;
  genre: string;
  date: string;
  films: IMockDataFilms[];
}

const App = (props : Props) =>
  // const nav = useNavigate();
  // console.log(nav);
  (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainPage {...props}/>}
        />
        <Route
          path='/login'
          element={<SignInPAge/>}
        />
        <Route path='/mylist' element={
          <PrivateRoute>
            <MyListPage favoriteFilms={props.films}/>
          </PrivateRoute>
        }
        />
        <Route
          path='/films/:id'
          element={<FilmPage films={props.films} />}
        />
        <Route
          path='/films/:id/review'
          element={<AddReviewPage films={props.films}/>}
        />
        <Route
          path='/player'
          element={<PlayerPage films={props.films}/>}
        />
        <Route
          path='*'
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
export default App;
