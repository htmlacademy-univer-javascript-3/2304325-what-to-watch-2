import {useState} from 'react';
import { FilmCard } from './types/types';
import Card from './card-film';
import { useAppSelector } from './hooks/useAppSelector';

export const CardList = () => {
  const [activeFilm, setActiveCard] = useState<FilmCard | null>(null);
  const films = useAppSelector((state) => state.films);

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        (
          <Card
            isActive={activeFilm?.id === film.id}
            key={film.id} bgImage={film.bgImage}
            title={film.title} id={film.id}
            onMouseOver={() => setActiveCard(film)}
            onMouseOut={() => setActiveCard(null)}
            previewImage={film.previewImage}
            previewVideoLink={film.previewVideoLink}
            genre={film.genre}
          />
        )
      )}
    </div>
  );
};
