import { GenreListElement } from './components/genre-list-element.tsx';
import { GENRE_ALL_GENRES } from '../../const/const.ts';
import { FilmCard } from '../../types/types.ts';

type GenreListProps = {
  filmsData: FilmCard[];
  activeGenre: string | undefined;
  clickHandler: (genre: string) => void;
};

const GENRE_ITEM_ACTIVE_STYLE = 'catalog__genres-item--active';
const GenreList = ({filmsData, activeGenre, clickHandler}: GenreListProps) => {

  const genere = filmsData
    .reduce((acc: string[], film) => acc.includes(film.genre) ? acc : [...acc, film.genre], [GENRE_ALL_GENRES]) as unknown as string[];
  return (
    <ul className="catalog__genres-list">
      {
        genere.map((item): JSX.Element => (
          <GenreListElement
            key={self.crypto.randomUUID()}
            genre={item}
            className={activeGenre === item ? GENRE_ITEM_ACTIVE_STYLE : ''}
            clickHandler={clickHandler}
          />
        ))
      }
    </ul>
  );
};

export default GenreList;
