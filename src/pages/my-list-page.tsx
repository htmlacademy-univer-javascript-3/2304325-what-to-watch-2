import {CardList} from '../card-list';
import Footer from '../components/footer';
import Header from '../components/header';
import { HeaderStyleType } from '../const/const';
import { useAppSelector } from '../hooks/useAppSelector';


const MyListPage = ()=> {
  const films = useAppSelector((state) => state.favoriteFilms);

  return (
    <div className="user-page">
      <Header headerStyleType={HeaderStyleType.User}>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films?.length}</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CardList films={films} />
      </section>

      <Footer/>
    </div>
  );
};

export default MyListPage;
