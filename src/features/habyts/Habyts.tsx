import React from 'react';
import { useAppSelector } from '../../App/hooks';
import HabytForm from '../../components/forms/HabytForm/HabytForm';
import { Habyt } from './habyt.types';
import { selectHabyts } from './HabytSlice';

export default () => {
  const habyts = useAppSelector(selectHabyts);

  return (
    <>
      {habyts.map((habyt: Habyt) => (
        <div key={habyt.id}>
          <div>{habyt.name}</div>
          <div>{habyt.type}</div>
          <div>{habyt.UoM}</div>
        </div>
      ))}
      <HabytForm />
    </>
  );
};
