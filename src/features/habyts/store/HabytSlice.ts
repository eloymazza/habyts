import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store';
import { NewHabytData } from '../../../components/Forms/AddDataForm/AddHabytDataForm';
import { Habyt } from '../types/habyt.types';

export const habytSlice = createSlice({
  name: 'habyts',
  initialState: [] as Habyt[],
  reducers: {
    add: (state, action: PayloadAction<Habyt>) => {
      state.push(action.payload);
    },
    update: (state, { payload }: PayloadAction<NewHabytData>) => {
      const { id, date, value } = payload;
      console.log(id, date, value);
      const habyt = state.find((el) => el.id === id);
      console.log(habyt);
      habyt?.data.push([date, value]);
    },
  },
});

export const { add, update } = habytSlice.actions;

export const selectHabyts = (state: RootState) => state.habyts;

export default habytSlice.reducer;
