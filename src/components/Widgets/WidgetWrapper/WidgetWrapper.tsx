import React, { useState } from 'react';

import AddDataForm from '../../Forms/AddDataForm/AddHabytDataForm';

type Props = {
  children: JSX.Element;
  id: string;
};

const WidgetWrapper: React.FC<Props> = ({ children, id }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <>
      {children}
      <button type="button" onClick={() => setShowForm(!showForm)}>
        Add Data
      </button>
      {showForm && <AddDataForm id={id} />}
    </>
  );
};

export default WidgetWrapper;
