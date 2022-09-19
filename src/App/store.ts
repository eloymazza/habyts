import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import habytsReducer from '../features/habyts/HabytsSlice';

export const store = configureStore({
  reducer: {
    habyts: habytsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
