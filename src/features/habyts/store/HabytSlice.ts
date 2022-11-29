import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store';
import { NewHabytData } from '../../../components/Forms/AddDataForm/AddHabytDataForm';
import { TimePeriodOption } from '../../../components/Widgets/WidgetWrapper/WidgetWrapper';
import {
  getCurrentMonth,
  getCurrentYear,
  getMonthDays,
  getMonthStartDate,
  getNextXDay,
} from '../../../utils/dateUtils';
// import { TimePeriodNames, TimePeriodTypes } from '../enums/habytEnums';
import { TimePeriodTypes } from '../enums/habytEnums';
import { Habyt } from '../types/habyt.types';

export type UpdatePagePayload = {
  id: string;
  value: -1 | 1;
};

export type UpdateTimePeriodPayload = {
  id: string;
  timePeriod: TimePeriodOption;
};

type PeriodSpan = {
  from: number;
  to: number;
};

const getTimePeriod = (
  page: number,
  // { name, type, periodSpan }: TimePeriodOption
  { type, periodSpan }: TimePeriodOption
): PeriodSpan => {
  let from = new Date();
  let to = new Date();
  const now = new Date(Date.now());
  switch (type) {
    case TimePeriodTypes.RELATIVE:
      from = getNextXDay(now, periodSpan * page);
      to = getNextXDay(from, periodSpan);
      break;
    case TimePeriodTypes.FIXED:
      // if (name === TimePeriodNames.CURRENT_MONTH) {
      from = getMonthStartDate(getCurrentYear(now), getCurrentMonth(now));
      to = getNextXDay(from, periodSpan * page);
      // }
      break;
    case TimePeriodTypes.CUSTOM:
      break;
    default:
  }
  return {
    from: from.getTime(),
    to: to.getTime(),
  };
};

export const habytSlice = createSlice({
  name: 'habyts',
  initialState: [] as Habyt[],
  reducers: {
    add: (state, { payload }: PayloadAction<Habyt>) => {
      state.push(payload);
    },
    update: (state, { payload }: PayloadAction<NewHabytData>) => {
      const { id, date, value } = payload;
      const [year, month, day] = date.split('-');
      const habyt = state.find((el) => el.id === id);
      if (!habyt) return;
      habyt.data[year] = habyt.data[year] || {};
      habyt.data[year][month] =
        habyt.data[year][month] ||
        Array.from({ length: getMonthDays(+year, +month) }, () => 0);
      habyt.data[year][month][+day - 1] = value;
    },
    //     name: TimePeriodNames;
    // type: TimePeriodTypes;
    // from: Date;
    // to: Date;
    // periodSpan: number;
    setPageById: (state, { payload }: PayloadAction<UpdatePagePayload>) => {
      const { id, value } = payload;
      const habyt = state.find((el) => el.id === id);
      if (!habyt) return;
      const { config } = habyt;
      const { timePeriod } = config;
      const timePeriodOption = {
        name: timePeriod.name,
        type: timePeriod.type,
        periodSpan: timePeriod.periodSpan,
      };
      const tp = getTimePeriod(config.page, timePeriodOption);
      config.page += value;
      config.timePeriod = { ...config.timePeriod, ...tp };
    },
    setTimePeriodById: (
      state,
      { payload }: PayloadAction<UpdateTimePeriodPayload>
    ) => {
      const { id, timePeriod } = payload;
      const habyt = state.find((el) => el.id === id);
      if (!habyt) return;
      const tp = getTimePeriod(habyt.config.page, timePeriod);
      habyt.config.timePeriod = { ...timePeriod, ...tp };
    },
  },
});

export const { add, update, setPageById, setTimePeriodById } =
  habytSlice.actions;

export const selectHabyts = (state: RootState) => state.habyts;

export default habytSlice.reducer;
