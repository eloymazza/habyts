import React from 'react';
import { useAppSelector } from '../../App/hooks';
import HabytForm from '../../components/forms/HabytForm/HabytForm';
import HabytWidget from './HabytWidget';
import { Habyt } from './habyt.types';
import { selectHabyts } from './HabytSlice';

export default () => {
  const habyts = useAppSelector(selectHabyts);

  return (
    <>
      {habyts.map((habyt: Habyt) => (
        <HabytWidget key={habyt.id} data={habyt} />
      ))}
      <HabytForm />
    </>
  );
};
