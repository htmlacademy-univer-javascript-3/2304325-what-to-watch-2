import {useState} from 'react';
import { FilmPreviewData, FilmsPreviewData } from './types/types';
import Card from './card-film';
import { useAppSelector } from './hooks/useAppSelector';
import Spinner from './components/spinner';

type Props = {
  films: FilmsPreviewData | null;
}

export const CardList = ({films} : Props) => {
  const [activeFilm, setActiveCard] = useState<FilmPreviewData | null>(null);
  const isLoading = useAppSelector((state) => state.isFilmsDataLoading);

  if(isLoading) {
    return (
      <Spinner/>
    );
  }
  return (
    <div className="catalog__films-list">
      {films?.map((film) =>
        (
          <Card
            isActive={activeFilm?.id === film.id}
            key={film.id} previewImage={film.previewImage}
            name={film.name} id={film.id}
            onMouseOver={() => setActiveCard(film)}
            onMouseOut={() => setActiveCard(null)}
            previewVideoLink={film.previewVideoLink}
            genre={film.genre}
          />
        )
      )}
    </div>
  );
};
