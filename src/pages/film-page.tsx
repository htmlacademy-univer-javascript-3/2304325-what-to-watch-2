import { Tabs } from '../components/tabs';
import { useEffect, useState } from 'react';
import { CardList } from '../card-list';
import { Details } from '../components/details-block';
import { Reviews } from '../components/reviews-block';
import { Overview } from '../components/overview-block';
import { TabProps } from '../types/tabs';
import { Link, useParams } from 'react-router-dom';
import { FilmPreviewData } from '../types/types';
import Footer from '../components/footer';
import Header from '../components/header';
import { useAppSelector } from '../hooks/useAppSelector';
import { AppRoute, AuthStatus } from '../const/const';
import { FilmData, FilmPreview } from '../types/film-data';
import api from '../api/api';
import MyListButton from '../components/my-list-button';
import PlayLink from '../components/play-link';
import { getRatingDescription } from '../utils/film';


const FilmPage = () => {
  const {id} = useParams();
  // const filmsData = useAppSelector((state) => state.currentFilms);
  // const film = filmsData.find((item) => item.id === params.id) as FilmPreviewData;
  const authStatus = useAppSelector((state) => state.authStatus);
  const [film, setFilm] = useState<FilmData | null>(null);
  const [favoriteList, setFavoriteList] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  // const moreFilms = filmsData.slice(0,4);
  // const getContentByType = () => {
  //   switch (activeTab) {
  //     case 1: return <Details {...props.tabData.details}/>;
  //     case 2: return <Reviews reviews={props.tabData.reviews}/>;
  //     default: return <Overview {...props.tabData.overview}/>;
  //   }
  // };

  useEffect(() => {
    if(id) {
      const data = api.get(`films/${id}`);
      data.then((res) => setFilm(res.data as FilmData));
    }
    if(authStatus === AuthStatus.Auth) {
      const data = api.get<FilmPreview[]>('favorite');
      data.then((res) => setFavoriteList(res.data.length));
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
                <MyListButton isFavorite={film.isFavorite} listLength={favoriteList}/>
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
              {/* { getContentByType() } */}

              <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{getRatingDescription(film.rating)}</span>
                  <span className="film-rating__count">{film.scoreCount}</span>
                </p>
              </div>

              <p>
                {film.description}
              </p>
              <p className="film-card__director"><strong>Director: {film.director}</strong></p>

              <p className="film-card__starring">
                <strong>Starring: {film.starring?.join(', ')}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {/* <CardList films={moreFilms}/> */}
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

export default FilmPage;
