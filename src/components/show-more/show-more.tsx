import { useAppDispatch } from '../../hooks/useAppSelector';
import { showMoreFilms } from '../../store/action';

const ShowMore = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(showMoreFilms());
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleClick}>Show more</button>
    </div>
  );
};

export default ShowMore;
