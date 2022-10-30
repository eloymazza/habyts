import { DEFAULT_CONFIG } from '../../../components/Forms/HabytForm/HabytForm';
import { ENCOURAGE, Habyt } from '../types/habyt.types';
import habytsReducer, { add } from './HabytSlice';

const addExpectedResult = [
  {
    UoM: 'Kgs',
    creationDate: '1666661219835',
    data: {},
    goal: undefined,
    id: '1',
    name: 'test',
    type: 'encourage',
  },
];

describe('counter reducer', () => {
  const initialState: Habyt[] = [];
  it('should handle initial state', () => {
    expect(habytsReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should handle add', () => {
    const testHabyt: Habyt = {
      id: '1',
      name: 'test',
      type: ENCOURAGE,
      UoM: 'Kgs',
      goal: undefined,
      data: {},
      creationDate: '1666661219835',
      config: DEFAULT_CONFIG,
    };
    const actual = habytsReducer(initialState, add(testHabyt));
    expect(actual).toEqual(addExpectedResult);
  });
});
