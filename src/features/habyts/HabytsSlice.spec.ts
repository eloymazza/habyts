import habytsReducer, { Habyt, add } from './HabytsSlice';

describe('counter reducer', () => {
  const initialState: Habyt[] = [];
  it('should handle initial state', () => {
    expect(habytsReducer(undefined, { type: 'unknown' })).toEqual({
      value: '',
    });
  });

  it('should handle add', () => {
    const actual = habytsReducer(initialState, add({ id: '1', value: 'test' }));
    expect(actual).toEqual({ value: 'test' });
  });
});
