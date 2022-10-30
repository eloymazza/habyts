import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../App/hooks';
import { add } from '../../../features/habyts/store/HabytSlice';
import {
  AVG,
  DAY,
  DISCOURAGE,
  ENCOURAGE,
  Habyt,
  HabytType,
  Goal,
  MAX,
  MIN,
  MONTH,
  SUM,
  WEEK,
  YEAR,
  HabytConfig,
} from '../../../features/habyts/types/habyt.types';

export type HabytFormFields = {
  name: string;
  type: HabytType;
  UoM: string;
  goal?: Goal;
};

export const DEFAULT_CONFIG: HabytConfig = {
  timePeriod: {
    name: 'days',
    type: 'RELATIVE',
    periodSpan: 14,
  },
  page: 0,
};

const KGS = 'Kgs';

const ALLOWED_TYPES = [ENCOURAGE, DISCOURAGE];
const ALLOWED_CALC_TYPES = [SUM, AVG, MAX, MIN];
const ALLOWED_TIMELAPSES = [WEEK, MONTH, YEAR];
const ALLOWED_AVG_BASIS = [DAY, WEEK, MONTH];

const stringIsAllowed = (allowedValues: string[], value?: string): boolean =>
  value ? allowedValues.includes(value) : false;

const HabytSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Name is too short!')
    .max(40, 'Name is too long!')
    .required('The Field "Name" is Required'),
  type: Yup.string()
    .default(ENCOURAGE)
    .test((value) => stringIsAllowed(ALLOWED_TYPES, value))
    .required('Field type must be "encourage" or "discourage"'),
  UoM: Yup.string().required('An unit of measure must be selected'),
  goal: Yup.object({
    target: Yup.number().required('Goal target cannot be empty'),
    calcType: Yup.string().test((value) =>
      stringIsAllowed(ALLOWED_CALC_TYPES, value)
    ),
    goalTimeLapse: Yup.string().test((value) =>
      stringIsAllowed(ALLOWED_TIMELAPSES, value)
    ),
    goalTimeLapseSpan: Yup.number()
      .required('Goal timelapse span cannot be empty')
      .min(1),
    avgBasis: Yup.string().test((value) =>
      stringIsAllowed(ALLOWED_AVG_BASIS, value)
    ),
  })
    .notRequired()
    .default(undefined)
    .nullable(true),
});

const HabytForm: React.FC = () => {
  const dispatch = useAppDispatch();
  // TODO: Add in v2
  // const [showGoalControls, setShowGoalControls] = useState<boolean>(false);

  const initialValues: HabytFormFields = {
    name: '',
    type: ENCOURAGE,
    UoM: KGS,
    goal: undefined,
  };

  const addHabyt = ({ name, type, UoM }: HabytFormFields) => {
    const creationDate = Date.now().toString();
    const id = creationDate;
    const newHabyt: Habyt = {
      id,
      name,
      type,
      UoM,
      goal: undefined,
      data: {},
      creationDate,
      config: DEFAULT_CONFIG,
    };

    dispatch(add(newHabyt));
  };

  // TODO: Feature to be added in V2
  // const handleShowGoalChange = ({
  //   target,
  // }: React.ChangeEvent<HTMLInputElement>) =>
  //   setShowGoalControls(target.checked);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={HabytSchema}
      onSubmit={addHabyt}
    >
      <Form>
        <label>Name</label>
        <br />
        <Field type="text" name="name" />
        <br />
        <label>Type</label>
        <br />
        <Field type="radio" name="type" value={ENCOURAGE} />
        <Field type="radio" name="type" value={DISCOURAGE} />
        <br />
        <label>UoM</label>
        <br />
        <Field as="select" name="UoM" id="UoM">
          <option value="Kms">Kms</option>
          <option value="Kgs">Kgs</option>
          <option value="Lts">L</option>
          <option value="Mins">Mins</option>
          <option value="Hours">Hours</option>
          <option value="Days">Days</option>
          <option value="Weeks">Weeks</option>
        </Field>
        <br />
        <label>Set Goal</label>
        {/* <Field type="checkbox" name="goal" onClick={handleShowGoalChange} /> */}
        <br />
        {/* {showGoalControls && (
          <div>
            <label> Configure a Goal</label>
            <br />
            <label> Goal Target </label>
            <Field type="number" name="target" />
          </div>
        )} */}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default HabytForm;
