import { createAction } from '@reduxjs/toolkit';
import { FilmsPreviewData, User } from '../types/types';
import { AppRoute, AuthStatus } from '../const/const';

export const changeGenre = createAction<{genre: string}>('genre/changeGenre');
export const getFilmsByGenre = createAction<{genre: string}>('films/getFilmsByGenre');
export const showMoreFilms = createAction('films/showMoreFilms');
export const resetCurrentFilms = createAction('films/resetCurrentFilms');

export const loadFilms = createAction<FilmsPreviewData>('films/loadFilmsData');

export const setError = createAction<string | null>('films/setError');

export const setLoadingStatus = createAction<boolean>('films/setFilmsDataLoadingStatus');

export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');

export const setUserData = createAction<User>('user/setUserData');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

export const getFavoriteFilms = createAction<FilmsPreviewData>('films/getFavoriteFilms');

