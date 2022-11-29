import React, { useState } from 'react';
import { useAppDispatch } from '../../../App/hooks';
import {
  PageActions,
  TimePeriodNames,
  TimePeriodTypes,
  WEEKS_PERIOD_SPAN,
} from '../../../features/habyts/enums/habytEnums';
import HabytWidget from '../../../features/habyts/HabytWidget/HabytWidget';
import {
  setPageById,
  setTimePeriodById,
} from '../../../features/habyts/store/HabytSlice';
import { Habyt, TimePeriod } from '../../../features/habyts/types/habyt.types';
import {
  getCurrentMonth,
  getCurrentYear,
  getMonthDays,
} from '../../../utils/dateUtils';

import AddDataForm from '../../Forms/AddDataForm/AddHabytDataForm';

type Props = {
  habyt: Habyt;
};

export type TimePeriodOption = Pick<TimePeriod, 'name' | 'type'> & {
  periodSpan: number;
};

const TIME_PERIODS: TimePeriodOption[] = [
  {
    name: TimePeriodNames.DAYS,
    type: TimePeriodTypes.RELATIVE,
    periodSpan: 14,
  },
  {
    name: TimePeriodNames.WEEKS,
    type: TimePeriodTypes.RELATIVE,
    periodSpan: WEEKS_PERIOD_SPAN,
  },
  {
    name: TimePeriodNames.CURRENT_MONTH,
    type: TimePeriodTypes.FIXED,
    periodSpan: getMonthDays(
      getCurrentYear(new Date()),
      getCurrentMonth(new Date())
    ),
  },
];

const WidgetWrapper: React.FC<Props> = ({ habyt }: Props) => {
  const dispatch = useAppDispatch();
  const { config, id } = habyt;
  const { page, timePeriod } = config;

  const [showForm, setShowForm] = useState<boolean>(false);

  const updateTimePeriod = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tp =
      TIME_PERIODS.find((tps) => tps.name === event.target.value) ||
      TIME_PERIODS[0];
    dispatch(setTimePeriodById({ id, timePeriod: tp }));
  };

  return (
    <>
      <HabytWidget habyt={habyt} />
      <button type="button" onClick={() => setShowForm(!showForm)}>
        Add Data
      </button>
      <button
        type="button"
        disabled={page === 1}
        onClick={() => dispatch(setPageById({ id, value: PageActions.PREV }))}
      >
        Prev
      </button>
      <button
        type="button"
        onClick={() => dispatch(setPageById({ id, value: PageActions.NEXT }))}
      >
        Next
      </button>
      {showForm && <AddDataForm id={id} />}
      <select value={timePeriod.name} onChange={updateTimePeriod}>
        {TIME_PERIODS.map(({ name }) => (
          <option key={name} id={name}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default WidgetWrapper;
