import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { catalogFilmCards, filmCardData } from './mocks/films';
import { playerData } from './mocks/player';
import { tabData } from './mocks/tabProps';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilmsAction } from './store/api-action';

const props = {
  catalogFilmCards,
  filmCardData,
  playerData,
  tabData
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App {...props} />
    </Provider>
  </React.StrictMode>
);
