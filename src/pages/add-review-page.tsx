import { Link } from 'react-router-dom';
import AddReviewForm from '../components/add-review-form';
import Header from '../components/header';
import { AppRoute} from '../const/const';
import { FilmCard } from '../types/types';

type Props = FilmCard

const AddReviewPage = (props: Props) => (
  <section className="film-card film-card--full">
    <div className="film-card__header">
      <div className="film-card__bg">
        <img src={props.bgImage} alt={props.title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <Header>
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={AppRoute.Film.replace(':id', String(props.id)) } className="breadcrumbs__link">{props.title}</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link to={AppRoute.AddReview.replace(':id', String(props.id))} className="breadcrumbs__link">Add review</Link>
            </li>
          </ul>
        </nav>
      </Header>

      <div className="film-card__poster film-card__poster--small">
        <img src={props.bgImage} alt={props.title} width="218" height="327" />
      </div>
    </div>

    <AddReviewForm />

  </section>
);

export default AddReviewPage;
