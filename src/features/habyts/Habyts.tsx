import React from 'react';
import { useAppSelector } from '../../App/hooks';
import HabytForm from '../../components/forms/HabytForm/HabytForm';
import { selectHabyts } from './HabytSlice';

// interface HabytFormFields {
//   name: string;
//   type: HabytType;
//   UoM: string;
//   goal?: Goal;
// }

export default () => {
  const habyts = useAppSelector(selectHabyts);

  return (
    <>
      {habyts.map((el) => (
        <div key={el.id}>{el.name}</div>
      ))}
      <HabytForm />
    </>
  );
};
