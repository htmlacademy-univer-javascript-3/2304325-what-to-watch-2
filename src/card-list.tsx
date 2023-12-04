import {useState} from 'react';
import { FilmCard } from './types/types';
import Card from './card-film';

export const CardList = (props: {films: FilmCard[]}) => {
  const [activeFilm, setActiveCard] = useState<FilmCard | null>(null);
  return (
    <div className="catalog__films-list">
      {props.films.map((film) =>
        (
          <Card
            isActive={activeFilm?.id === film.id}
            key={film.id} bgImage={film.bgImage}
            title={film.title} id={film.id}
            onMouseOver={() => setActiveCard(film)}
            onMouseOut={() => setActiveCard(null)}
            previewImage={film.previewImage}
            previewVideoLink={film.previewVideoLink}
          />
        )
      )}
    </div>
  );
};
