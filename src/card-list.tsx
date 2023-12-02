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
            key={film.id} image={film.image}
            title={film.title} id={film.id}
            onMouseOver={() => setActiveCard(film)}
            onMouseOut={() => setActiveCard(null)}
          />
        )
      )}
    </div>
  );
};
