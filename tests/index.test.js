import test from 'ava';
import { reduce } from '../';

test('should dispatch and subscribe', t => {
  const initial = { count: 0 };
  const state = reduce((state, action) => {
    switch (action.type) {
      case 'reset':
        return initial;
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }, initial);

  const values = [];
  state.subscribe(value => {
    values.push(value);
  });

  state.dispatch({ type: 'increment' });
  state.dispatch({ type: 'increment' });
  state.dispatch({ type: 'decrement' });
  state.dispatch({});
  state.dispatch({ type: 'reset' });

  t.snapshot(values);
});
