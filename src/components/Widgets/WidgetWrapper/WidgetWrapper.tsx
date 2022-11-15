import React, { useState } from 'react';
import { TimePeriodTypes } from '../../../features/habyts/enums/habytEnums';
import { TimePeriods } from '../../../features/habyts/types/habyt.types';

import AddDataForm from '../../Forms/AddDataForm/AddHabytDataForm';

type Props = {
  children: JSX.Element;
  id: string;
};

const TIME_PERIODS: TimePeriods[] = [
  { name: 'days', type: TimePeriodTypes.RELATIVE, periodSpan: 14 },
  { name: 'month', type: TimePeriodTypes.FIXED },
];

const WidgetWrapper: React.FC<Props> = ({ children, id }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [timePeriod, setTimePeriod] = useState(TIME_PERIODS[0]);
  const [page, setPage] = useState<number>(0);

  const updateTimePeriod = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tp =
      TIME_PERIODS.find((tps) => tps.name === event.target.value) ||
      TIME_PERIODS[0];
    setTimePeriod(tp);
  };

  const childWithParams = {
    ...children,
    props: {
      ...children.props,
      habyt: {
        ...children.props.habyt,
        config: { timePeriod, page },
      },
    },
  };

  return (
    <>
      {childWithParams}
      <button type="button" onClick={() => setShowForm(!showForm)}>
        Add Data
      </button>
      <button
        type="button"
        disabled={page < 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >
        Prev
      </button>
      <button type="button" onClick={() => setPage((prevPage) => prevPage + 1)}>
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
