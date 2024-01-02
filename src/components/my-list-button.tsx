
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { AppRoute, AuthStatus } from '../const/const';
import { FilmDetails } from '../types/film-data';
import api from '../api/api';
import { useState } from 'react';

interface Props {
  listLength?: number;
  isFavorite: boolean;
}

export default function MyListButton({ listLength, isFavorite }: Props) {
  const {id} = useParams();

  const authStatus = useAppSelector((state) => state.authStatus);
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(isFavorite);

  function handleStatusToggle() {
    const data = api.post<FilmDetails>(`/favorite/${id as string}/${favorite ? 0 : 1}`);
    data.then((res) => setFavorite(res.data.isFavorite));
  }

  function handleClick() {
    if (authStatus === AuthStatus.Auth) {
      handleStatusToggle();
    } else {
      navigate(AppRoute.SignIn);
    }
  }

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      {isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" />
        </svg>
      )}
      <span>My list</span>
      {authStatus === AuthStatus.Auth && <span className="film-card__count">{Number(listLength)}</span>}
    </button>
  );
}
