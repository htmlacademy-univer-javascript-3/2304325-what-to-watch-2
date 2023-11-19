import { useState } from 'react';
import Card from './card-film';
import { IMockDataFilms } from './types/films';

type Props = {
  films: IMockDataFilms[];
}

const CardList = ({films} : Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeComponent, setActiveComponent] = useState<IMockDataFilms | null>(null);

  const handleMouseover = (el: IMockDataFilms) => {
    setActiveComponent(el);
  };

  return (
    <>
      {films.map((item) => <Card key={item.id} film={item} handleMouseover={handleMouseover} />)}
    </>
  );
};

export default CardList;
