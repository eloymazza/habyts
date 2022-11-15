import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../App/hooks';
import { add } from '../../../features/habyts/store/HabytSlice';
import {
  Goal,
  Habyt,
  HabytConfig,
} from '../../../features/habyts/types/habyt.types';
import {
  Calculations,
  HabytTypes,
  TimeLapses,
  TimePeriodTypes,
  UOMs,
} from '../../../features/habyts/enums/habytEnums';

export type HabytFormFields = {
  name: string;
  type: HabytTypes;
  UoM: string;
  goal?: Goal;
};

export const DEFAULT_CONFIG: HabytConfig = {
  timePeriod: {
    name: 'days',
    type: TimePeriodTypes.RELATIVE,
    periodSpan: 14,
  },
  page: 0,
};

const ALLOWED_TYPES = HabytTypes;
const ALLOWED_CALC_TYPES = Calculations;
const ALLOWED_GOAL_TIMELAPSES = {
  week: TimeLapses.WEEK,
  month: TimeLapses.MONTH,
  year: TimeLapses.YEAR,
};

const ALLOWED_GOAL_AVG_BASIS = {
  day: TimeLapses.DAY,
  week: TimeLapses.WEEK,
  month: TimeLapses.MONTH,
};

const stringIsAllowed = (
  allowedValues: Record<string, string>,
  value?: string
): boolean => (value ? Object.values(allowedValues).includes(value) : false);

const HabytSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Name is too short!')
    .max(40, 'Name is too long!')
    .required('The Field "Name" is Required'),
  type: Yup.string()
    .default(HabytTypes.ENCOURAGE)
    .test((value) => stringIsAllowed(ALLOWED_TYPES, value))
    .required('Field type must be "encourage" or "discourage"'),
  UoM: Yup.string().required('An unit of measure must be selected'),
  goal: Yup.object({
    target: Yup.number().required('Goal target cannot be empty'),
    calcType: Yup.string().test((value) =>
      stringIsAllowed(ALLOWED_CALC_TYPES, value)
    ),
    goalTimeLapse: Yup.string().test((value) =>
      stringIsAllowed(ALLOWED_GOAL_TIMELAPSES, value)
    ),
    goalTimeLapseSpan: Yup.number()
      .required('Goal timelapse span cannot be empty')
      .min(1),
    avgBasis: Yup.string().test((value) =>
      stringIsAllowed(ALLOWED_GOAL_AVG_BASIS, value)
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
    type: HabytTypes.ENCOURAGE,
    UoM: UOMs.KGS,
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
        <Field type="radio" name="type" value={HabytTypes.ENCOURAGE} />
        <Field type="radio" name="type" value={HabytTypes.DISCOURAGE} />
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
