import { useEffect, useState } from 'react';
import { CardList } from '../card-list';
import FilmPreview from '../components/film-preview';
import Footer from '../components/footer';
import GenreList from '../components/genre-list/genre-list';
import Header from '../components/header';
import ShowMore from '../components/show-more/show-more';
import { HeaderStyleType } from '../const/const';
import { useAppSelector } from '../hooks/useAppSelector';
import api from '../api/api';
import { FilmData } from '../types/film-data';


const MainPage = () => {
  const counter = useAppSelector((state) => state.counter);
  const allFilms = useAppSelector((state) => state.currentFilmsLength);
  const currentFilms = useAppSelector((state) => state.currentFilms);
  const [film, setFilm] = useState<FilmData | null>(null);

  const getPreviewFilm = async () => {
    const data = await api.get('promo');
    return data.data as FilmData;

  };

  useEffect(() => {
    getPreviewFilm().then((res) => setFilm(res));
  }, []);


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header headerStyleType={HeaderStyleType.Film}/>

        {film && <FilmPreview film={film}/>}
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList/>

          <CardList films={currentFilms}/>

          {counter < allFilms && <ShowMore/>}

        </section>

        <Footer/>
      </div>
    </>
  );
};

export default MainPage;
