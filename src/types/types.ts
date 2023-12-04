import { TabProps } from './tabs';

export type CommonProps = {
  filmCardData: FilmCard;
  catalogFilmCards: FilmCard[];
  playerData: {
    src: string;
    poster: string;
    time: string;
    name: string;
  };
  tabData: TabProps;
}

export type FilmCard = {
  id: number;
  title: string;
  previewImage: string;
  previewVideoLink: string;
  genre?: string;
  year?: number;
  bgImage?: string;
};
