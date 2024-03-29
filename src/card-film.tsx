import { Link } from 'react-router-dom';
import { Preview } from './components/preview';
import { FilmPreviewData } from './types/types';

type Props = FilmPreviewData & {
  onMouseOver: (film: FilmPreviewData) => void;
  onMouseOut: (film: FilmPreviewData) => void;
  isActive: boolean;
}
const Card = (props : Props) => (
  <article
    className="small-film-card catalog__films-card"
    onMouseOver={() => props.onMouseOver(props)}
    onMouseOut={() => props.onMouseOut(props)}
  >
    <Link to={`/films/${props.id}`}>
      <div className="small-film-card__image">
        <Preview
          src={props.previewVideoLink}
          poster={props.previewImage}
          isActive={props.isActive}
          name={props.name}
        />
      </div>
    </Link>

    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${props.id}`}>{props.name}</Link>
    </h3>
  </article>
);

export default Card;
