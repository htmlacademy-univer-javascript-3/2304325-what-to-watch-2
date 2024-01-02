import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer.ts';
import api from '../api/api.ts';
import { redirect } from './middleware/redirect.ts';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect)
});
