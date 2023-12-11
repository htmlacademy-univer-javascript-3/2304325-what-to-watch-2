import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmsByGenre } from './action.ts';
import { catalogFilmCards } from '../mocks/films.ts';
import { GENRE_ALL_GENRES } from '../const/const.ts';

const initialState = {
  genre: 'All genres',
  films: catalogFilmCards,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const {genre} = action.payload;
      state.films =
      catalogFilmCards
        .filter((item) => genre === GENRE_ALL_GENRES ? item : item.genre === genre);
    });
});

export {reducer};
