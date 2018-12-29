import { writable } from 'svelte/store';

export function reduce(reducer, initial) {
  const state = writable(initial);

  const subscribe = run => state.subscribe(run);
  const dispatch = action => {
    state.update(value => reducer(value, action));
  };

  return { subscribe, dispatch };
}
