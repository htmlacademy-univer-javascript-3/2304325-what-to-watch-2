import { Tabs } from '../components/tabs';
import { useEffect, useState } from 'react';
import { CardList } from '../card-list';
import { Details } from '../components/details-block';
import { Overview } from '../components/overview-block';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import { useAppSelector } from '../hooks/useAppSelector';
import { AppRoute, AuthStatus } from '../const/const';
import { FilmData } from '../types/film-data';
import api from '../api/api';
import MyListButton from '../components/my-list-button';
import PlayLink from '../components/play-link';
import Reviews from '../components/reviews-block';
import { FilmsPreviewData } from '../types/types';


const FilmPage = () => {
  const {id} = useParams();
  const authStatus = useAppSelector((state) => state.authStatus);
  const [film, setFilm] = useState<FilmData | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [similarFilms, setSimilarFilms] = useState<FilmsPreviewData | null>(null);
  const getContentByType = () => {
    switch (activeTab) {
      case 1: return <Details film={film}/>;
      case 2: return <Reviews />;
      default: return <Overview film={film}/>;
    }
  };

  useEffect(() => {
    if(id) {
      const data = api.get(`films/${id}`);
      data.then((res) => setFilm(res.data as FilmData));
      const similarData = api.get(`films/${id}/similar`);
      similarData.then((res) => setSimilarFilms(res.data as FilmsPreviewData));
    }
  }, []);

  if(!film) {
    return 'loading';
  }
  return (
    <>
      <section className="film-card film-card--full" style={{ backgroundColor: film.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayLink id={id as string}/>
                <MyListButton isFavorite={film.isFavorite}/>
                {authStatus === AuthStatus.Auth && <Link to={AppRoute.AddReview.replace(':id', film.id)} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
              { getContentByType() }
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <CardList films={similarFilms}/>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

export default FilmPage;
