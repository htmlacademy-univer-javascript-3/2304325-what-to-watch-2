import { Link, useParams } from 'react-router-dom';
import AddReviewForm from '../components/add-review-form';
import Header from '../components/header';
import { AppRoute} from '../const/const';
import { useEffect, useState } from 'react';
import { FilmData } from '../types/film-data';
import api from '../api/api';


const AddReviewPage = () => {
  const {id} = useParams();
  const [film, setFilm] = useState<FilmData | null>(null);

  useEffect(() => {
    if(id) {
      const data = api.get(`films/${id}`);
      data.then((res) => setFilm(res.data as FilmData));
    }
  }, [id]);

  return (
    <section className="film-card film-card--full" style={{ backgroundColor: film?.backgroundColor }}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film.replace(':id', String(film?.id)) } className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.AddReview.replace(':id', String(film?.id))} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small" >
          <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
};

export default AddReviewPage;
