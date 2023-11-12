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


type Props = {
  name: string;
  genre: string;
  date: string;
}

const App = (props : Props) => (
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
          <MyListPage/>
        </PrivateRoute>
      }
      />
      <Route
        path='/films/:id'
        element={<FilmPage/>}
      />
      <Route
        path='/films/:id/review'
        element={<AddReviewPage/>}
      />
      <Route
        path='/Player '
        element={<PlayerPage/>}
      />
      <Route
        path='*'
        element={<NotFoundPage/>}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
