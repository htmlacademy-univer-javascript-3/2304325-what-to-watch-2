export type CommonProps = {
  filmCardData: Film;
  catalogFilmCards: FilmCard[];
  myListArray: FilmCard[];
  moreFilms: FilmCard[];
  playerData: {
    src: string;
    poster: string;
    time: string;
    name: string;
  };
}

export type Film = {
  id: number;
  bgImage: string;
  posterImage: string;
  title: string;
  genre: string;
  year: number;
}

export type FilmCard = {
  id: number;
  image: string;
  title: string;
};
