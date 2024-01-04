import { GenreListElement } from './components/genre-list-element.tsx';
import { GENRE_ALL_GENRES } from '../../const/const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppSelector.ts';
import { changeGenre, getFilmsByGenre } from '../../store/action.ts';

const GENRE_ITEM_ACTIVE_STYLE = 'catalog__genres-item--active';

const GenreList = () => {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);
  const filmsData = useAppSelector((state) => state.films);

  const handleGenreClick = (genre: string) => {
    dispatch(changeGenre({genre}));
    dispatch(getFilmsByGenre({genre}));
  };

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
            clickHandler={handleGenreClick}
          />
        ))
      }
    </ul>
  );
};

export default GenreList;
