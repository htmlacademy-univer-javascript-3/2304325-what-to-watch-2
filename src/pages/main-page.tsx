import { CardList } from '../card-list';
import Footer from '../components/footer';
import GenreList from '../components/genre-list/genre-list';
import Header from '../components/header';
import { HeaderStyleType } from '../const/const';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';
import { changeGenre, getFilmsByGenre } from '../store/action';
import { FilmCard } from '../types/types';

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  filmCardData: FilmCard;
  catalogFilmCards: FilmCard[];
};

const MainPage = ({filmCardData, catalogFilmCards} : Props) => {
  const dispatch = useAppDispatch();
  const genreName = useAppSelector((state) => state.genre);

  const handleGenreClick = (genre: string) => {
    dispatch(changeGenre({genre}));
    dispatch(getFilmsByGenre({genre}));
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isLoggedIn headerStyleType={HeaderStyleType.Film}/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmCardData.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmCardData.genre}</span>
                <span className="film-card__year">{filmCardData.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList filmsData={catalogFilmCards} activeGenre={genreName} clickHandler={handleGenreClick}/>

          <CardList />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

export default MainPage;
