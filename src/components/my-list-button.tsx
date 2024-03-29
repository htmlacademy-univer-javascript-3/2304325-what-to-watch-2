
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/use-app-selector';
import { AppRoute, AuthStatus } from '../const/const';
import { FilmDetails } from '../types/film-data';
import api from '../api/api';
import { useLayoutEffect, useState } from 'react';

interface Props {
  isFavorite: boolean;
  idFilm?: string;
}

export default function MyListButton({ isFavorite, idFilm }: Props) {
  const {id} = useParams();

  const authStatus = useAppSelector((state) => state.authStatus);
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const [favoriteFilmsLength, setFavoriteFilmsLength] = useState(0);
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(isFavorite);

  function handleStatusToggle() {
    const data = api.post<FilmDetails>(`/favorite/${id ? id : idFilm as string}/${favorite ? 0 : 1}`);
    data.then((res) => setFavorite(res.data.isFavorite));
  }

  useLayoutEffect(() => {
    setFavoriteFilmsLength(favoriteFilms.length);
  }, [favoriteFilms]);


  function handleClick() {
    if (authStatus === AuthStatus.Auth) {
      handleStatusToggle();
      if(favorite) {
        setFavoriteFilmsLength((prev) => prev - 1);
      } else {
        setFavoriteFilmsLength((prev) => prev + 1);
      }
    } else {
      navigate(AppRoute.SignIn);
    }
  }

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      {favorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" />
        </svg>
      )}
      <span>My list</span>
      {authStatus === AuthStatus.Auth && <span className="film-card__count">{favoriteFilmsLength}</span>}
    </button>
  );
}
