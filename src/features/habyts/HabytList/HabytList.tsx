import React from 'react';
import { useAppSelector } from '../../../App/hooks';
import HabytForm from '../../../components/Forms/HabytForm/HabytForm';
import { Habyt } from '../types/habyt.types';
import { selectHabyts } from '../store/HabytSlice';
import WidgetWrapper from '../../../components/Widgets/WidgetWrapper/WidgetWrapper';

const HabytList = () => {
  const habyts = useAppSelector(selectHabyts);

  return (
    <>
      {habyts.map((habyt: Habyt) => (
        <WidgetWrapper key={habyt.id} habyt={habyt} />
      ))}
      <HabytForm />
    </>
  );
};

export default HabytList;
