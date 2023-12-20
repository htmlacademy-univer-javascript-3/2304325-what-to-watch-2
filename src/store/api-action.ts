import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { loadFilms, setLoadingStatus } from './action';
import { FilmsPreviewData } from '../types/types';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
('data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<FilmsPreviewData>('/films');
    dispatch(setLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

// export const clearErrorAction = createAsyncThunk(
//   'films/clearError',
//   () => {
//     setTimeout(
//       () => store.dispatch(setError(null)),
//       TIMEOUT_SHOW_ERROR
//     );
//   },
// );
