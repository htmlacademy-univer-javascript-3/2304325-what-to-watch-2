import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmsByGenre, loadFilms, setError, setLoadingStatus, showMoreFilms } from './action.ts';
import { catalogFilmCards } from '../mocks/films.ts';
import { GENRE_ALL_GENRES } from '../const/const.ts';
import { FilmsPreviewData } from '../types/types.ts';

const DEFAULT_VIEWE_FILMS = 8;

type InitialState = {
  films: FilmsPreviewData;
  counter: number;
  genre: string;
  currentFilms: FilmsPreviewData;
  // sortedFilms: FilmsPreviewData;
  // auth: AuthStatus;
  currentFilmsLength: number ;
  isFilmsDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  films: [],
  counter: DEFAULT_VIEWE_FILMS,
  genre: GENRE_ALL_GENRES,
  // currentFilms: catalogFilmCards.slice(0,DEFAULT_VIEWE_FILMS),
  currentFilms: [],
  currentFilmsLength: 0,
  isFilmsDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const {genre} = action.payload;
      state.counter = DEFAULT_VIEWE_FILMS;
      state.currentFilmsLength = catalogFilmCards.filter((item) => genre === GENRE_ALL_GENRES ? item : item.genre === genre).length;
      state.currentFilms =
      state.films
        .filter((item) => genre === GENRE_ALL_GENRES ? item : item.genre === genre).filter((_, index) => index < state.counter);
    })
    .addCase(showMoreFilms, (state) => {
      state.counter = state.counter + DEFAULT_VIEWE_FILMS;
      state.currentFilms =
      state.films
        .filter((item) => state.genre === GENRE_ALL_GENRES ? item : item.genre === state.genre).filter((_, index) => index < state.counter);
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.currentFilmsLength = state.films
        .filter((item) => state.genre === GENRE_ALL_GENRES ? item : item.genre === state.genre).length;
      state.currentFilms = state.films
        .filter((item) => state.genre === GENRE_ALL_GENRES ? item : item.genre === state.genre).filter((_, index) => index < state.counter);
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
