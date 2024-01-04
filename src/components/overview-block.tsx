import { FilmData } from '../types/film-data';
import { getRatingDescription } from '../utils/film';

export const Overview = ({film}: {film?: FilmData | null}) => {
  if(!film) {
    return null;
  }

  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <p>
        {film.description}
      </p>
      <p className="film-card__director"><strong>Director: {film.director}</strong></p>

      <p className="film-card__starring">
        <strong>Starring: {film.starring?.join(', ')}</strong>
      </p>

    </>
  );
};
