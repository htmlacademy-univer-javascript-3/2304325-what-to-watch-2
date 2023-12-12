import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmsByGenre, showMoreFilms } from './action.ts';
import { catalogFilmCards } from '../mocks/films.ts';
import { GENRE_ALL_GENRES } from '../const/const.ts';

const initialState = {
  films: catalogFilmCards,
  counter: 8,
  genre: GENRE_ALL_GENRES,
  currentFilms: catalogFilmCards.slice(0,8),
  currentFilmsLength: catalogFilmCards.length
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const {genre} = action.payload;
      state.counter = 8;
      state.currentFilmsLength = catalogFilmCards.filter((item) => genre === GENRE_ALL_GENRES ? item : item.genre === genre).length;
      state.currentFilms =
      catalogFilmCards
        .filter((item) => genre === GENRE_ALL_GENRES ? item : item.genre === genre).filter((_, index) => index < state.counter);
    })
    .addCase(showMoreFilms, (state) => {
      state.counter = state.counter + 8;
      state.currentFilms =
      catalogFilmCards
        .filter((item) => state.genre === GENRE_ALL_GENRES ? item : item.genre === state.genre).filter((_, index) => index < state.counter);
    });
});

export {reducer};
