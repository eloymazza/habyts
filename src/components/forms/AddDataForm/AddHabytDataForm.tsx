import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

type FormFields = {
  value: number;
  date: string;
};

const defaultDate = new Date('2022-01-05').toISOString().substring(0, 10);

const addHabytDataSchema = Yup.object().shape({
  value: Yup.number()
    .min(0, 'Only positive integers')
    .required('This field is required')
    .default(0),
  date: Yup.date().min(defaultDate).required('This field is required'),
});

export default () => {
  const initialValues: FormFields = {
    value: 1,
    date: defaultDate,
  };

  const addHabytData = ({ value, date }: FormFields) => {
    console.log(value, date);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addHabytDataSchema}
      onSubmit={addHabytData}
    >
      <Form>
        <label>value</label>
        <br />
        <Field type="number" name="value" />
        <br />
        <label>Date</label>
        <br />
        <Field type="date" name="date" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
