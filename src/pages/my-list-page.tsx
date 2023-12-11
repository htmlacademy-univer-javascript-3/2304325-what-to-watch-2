import {CardList} from '../card-list';
import Footer from '../components/footer';
import Header from '../components/header';
import { HeaderStyleType } from '../const/const';
import { FilmCard } from '../types/types';

type Props = {
  myListArray: FilmCard[];
}

const MyListPage = ({myListArray}: Props)=> (
  <div className="user-page">
    <Header isLoggedIn headerStyleType={HeaderStyleType.User}>
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__films-list">
        <CardList films={myListArray} />
      </div>
    </section>

    <Footer/>
  </div>
);

export default MyListPage;
