import { createAction } from '@reduxjs/toolkit';
import { FilmsPreviewData } from '../types/types';

export const changeGenre = createAction<{genre: string}>('genre/changeGenre');
export const getFilmsByGenre = createAction<{genre: string}>('films/getFilmsByGenre');
export const showMoreFilms = createAction('films/showMoreFilms');

export const loadFilms = createAction<FilmsPreviewData>('films/loadFilmsData');

export const setError = createAction<string | null>('films/setError');

export const setLoadingStatus = createAction<boolean>('films/setFilmsDataLoadingStatus');
