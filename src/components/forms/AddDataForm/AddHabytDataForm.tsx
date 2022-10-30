import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../App/hooks';
import { update } from '../../../features/habyts/store/HabytSlice';
import { getValidHTMLDateInputFormat } from '../../../utils/dateUtils';

type FormFields = {
  value: number;
  date: string;
};

export type NewHabytData = {
  id: string;
  value: number;
  date: string;
};

const defaultDate = getValidHTMLDateInputFormat(Date.now());

const addHabytDataSchema = Yup.object().shape({
  value: Yup.number()
    .min(0, 'Only positive integers')
    .required('This field is required')
    .default(0),
  date: Yup.date().required('This field is required'),
});

type Props = {
  id: string;
};

const AddDataForm: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const initialValues: FormFields = {
    value: 1,
    date: defaultDate,
  };

  const addHabytData = ({ value, date }: FormFields) => {
    const newData: NewHabytData = {
      id,
      value,
      date,
    };
    dispatch(update(newData));
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

export default AddDataForm;
