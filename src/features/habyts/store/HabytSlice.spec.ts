import { ENCOURAGE, Habyt } from '../types/habyt.types';
import habytsReducer, { add } from './HabytSlice';

describe('counter reducer', () => {
  const initialState: Habyt[] = [];
  it('should handle initial state', () => {
    expect(habytsReducer(undefined, { type: 'unknown' })).toEqual({
      value: '',
    });
  });

  it('should handle add', () => {
    const testHabyt: Habyt = {
      id: '1',
      name: 'test',
      type: ENCOURAGE,
      UoM: 'Kgs',
      goal: undefined,
      data: [],
      creationDate: Date.now().toString(),
    };
    const actual = habytsReducer(initialState, add(testHabyt));
    expect(actual).toEqual({ value: 'test' });
  });
});
