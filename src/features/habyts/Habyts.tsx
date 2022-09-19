import React from 'react';
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { add, selectHabyts } from './HabytsSlice';

export default () => {
  const habyts = useAppSelector(selectHabyts);
  const dispatch = useAppDispatch();

  const addHabyt = () => {
    dispatch(add({ id: '1', value: 'test' }));
  };

  return (
    <>
      {habyts.map((el) => (
        <div key={el.id}>{el.value}</div>
      ))}
      <button type="button" onClick={addHabyt}>
        Add Habyt
      </button>
    </>
  );
};
