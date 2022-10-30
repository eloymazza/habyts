import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store';
import { NewHabytData } from '../../../components/Forms/AddDataForm/AddHabytDataForm';
import { getCurrentMonthsDays } from '../../../utils/dateUtils';
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
      const [year, month, day] = date.split('-');
      const habyt = state.find((el) => el.id === id);

      if (!habyt) return;

      habyt.data[year] = habyt.data[year] || {};
      habyt.data[year][month] =
        habyt.data[year][month] ||
        Array.from({ length: getCurrentMonthsDays(+year, +month) }, () => 0);

      habyt.data[year][month][+day - 1] = value;
    },
  },
});

export const { add, update } = habytSlice.actions;

export const selectHabyts = (state: RootState) => state.habyts;

export default habytSlice.reducer;
