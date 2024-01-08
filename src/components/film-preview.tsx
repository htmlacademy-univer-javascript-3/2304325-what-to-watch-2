import { FilmData } from '../types/film-data';
import MyListButton from './my-list-button';
import PlayLink from './play-link';


type Props = {
  film: FilmData;
}

const FilmPreview = ({film}: Props): JSX.Element => (
  <div className="film-card__wrap">
    <div className="film-card__info">
      <div className="film-card__poster">
        <img
          src={film.posterImage}
          alt={film.name}
          width="218"
          height="327"
        />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{film.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{film.genre}</span>
          <span className="film-card__year">{film.released}</span>
        </p>

        <div className="film-card__buttons">
          <PlayLink id={film.id}/>
          <MyListButton isFavorite={film.isFavorite} idFilm={film.id}/>
        </div>
      </div>
    </div>
  </div>
);

export default FilmPreview;
