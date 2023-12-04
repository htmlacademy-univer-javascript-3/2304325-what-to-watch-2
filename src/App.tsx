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


const App = (props : CommonProps) =>
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
            <MyListPage myListArray={props.catalogFilmCards}/>
          </PrivateRoute>
        }
        />
        <Route
          path='/films/:id'
          element={<FilmPage {...props.filmCardData} tabData={props.tabData} />}
        />
        <Route
          path='/films/:id/review'
          element={<AddReviewPage {...props.filmCardData}/>}
        />
        <Route
          path='/player/:id'
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
