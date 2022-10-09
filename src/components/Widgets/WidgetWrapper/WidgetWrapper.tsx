import React, { useState } from 'react';
import AddDataForm from '../../Forms/AddDataForm/AddHabytDataForm';

type Props = {
  children: JSX.Element;
};

const WidgetWrapper: React.FC<Props> = ({ children }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <>
      {children}
      <button type="button" onClick={() => setShowForm(!showForm)}>
        {' '}
        Add Data
      </button>
      {showForm && <AddDataForm />}
    </>
  );
};

export default WidgetWrapper;
