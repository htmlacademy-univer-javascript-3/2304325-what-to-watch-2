import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFavoriteFilms, getFilmsByGenre, loadFilms, requireAuthorization, resetCurrentFilms, setError, setLoadingStatus, setUserData, showMoreFilms } from './action.ts';
import { AuthStatus, GENRE_ALL_GENRES } from '../const/const.ts';
import { FilmsPreviewData, User } from '../types/types.ts';

const DEFAULT_VIEWE_FILMS = 8;

type InitialState = {
  films: FilmsPreviewData;
  counter: number;
  genre: string;
  currentFilms: FilmsPreviewData;
  currentFilmsLength: number ;
  isFilmsDataLoading: boolean;
  error: string | null;
  authStatus: AuthStatus;
  user: User;
  favoriteFilms: FilmsPreviewData | null;
}

const initialState: InitialState = {
  films: [],
  counter: DEFAULT_VIEWE_FILMS,
  genre: GENRE_ALL_GENRES,
  currentFilms: [],
  currentFilmsLength: 0,
  isFilmsDataLoading: false,
  error: null,
  authStatus: AuthStatus.Unknown,
  user: {
    name: '',
    avatarUrl: '',
    email: '',
  },
  favoriteFilms: null,
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
      state.currentFilmsLength = state.films.filter((item) => genre === GENRE_ALL_GENRES ? item : item.genre === genre).length;
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(getFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(resetCurrentFilms, (state) => {
      state.counter = DEFAULT_VIEWE_FILMS;
      state.currentFilms =
      state.films
        .filter((item) => state.genre === GENRE_ALL_GENRES ? item : item.genre === state.genre).filter((_, index) => index < state.counter);
    });
});

export {reducer};
