import React from 'react';
import { useAppSelector } from '../../App/hooks';
import HabytForm from '../../components/Forms/HabytForm/HabytForm';
import HabytWidget from './HabytWidget';
import { Habyt } from './habyt.types';
import { selectHabyts } from './HabytSlice';
import WidgetWrapper from '../../components/Widgets/WidgetWrapper/WidgetWrapper';

export default () => {
  const habyts = useAppSelector(selectHabyts);

  return (
    <>
      {habyts.map((habyt: Habyt) => (
        <WidgetWrapper key={habyt.id}>
          <HabytWidget data={habyt} />
        </WidgetWrapper>
      ))}
      <HabytForm />
    </>
  );
};
