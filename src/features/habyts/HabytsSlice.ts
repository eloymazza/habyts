import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../App/store';

export interface Habyt {
  id: string;
  value: string;
}

const initialState: Habyt[] = [];

export const habytSlice = createSlice({
  name: 'habyts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Habyt>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = habytSlice.actions;

export const selectHabyts = (state: RootState) => state.habyts;

export default habytSlice.reducer;
