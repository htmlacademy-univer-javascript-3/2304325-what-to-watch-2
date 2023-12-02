import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { catalogFilmCards, filmCardData, moreFilms, myListArray } from './mocks/films';
import { playerData } from './mocks/player';

const props = {
  catalogFilmCards,
  filmCardData,
  myListArray,
  moreFilms,
  playerData
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App {...props} />
  </React.StrictMode>
);
