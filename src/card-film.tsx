import { Link } from 'react-router-dom';
import { IMockDataFilms } from './types/films';

type Props = {
  film: IMockDataFilms;
  handleMouseover: (el: IMockDataFilms) => void;
}

const Card = ({film, handleMouseover} : Props) => (
  <article className="small-film-card catalog__films-card" onMouseOver={() => handleMouseover(film)}>
    <div className="small-film-card__image">
      <img src={film.preview} alt={film.name} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
    </h3>
  </article>
);

export default Card;
