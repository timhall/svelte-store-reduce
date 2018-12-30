# svelte-store-reduce

Use a reducer with svelte's built-in writable store, similar to React's `useReducer` and redux.

```html
Count: {$state.count}

<button on:click={() => state.dispatch(decrement())}>-</button>
<button on:click={() => state.dispatch(increment())}>+</button>

<script>
import { reduce } from 'svelte-store-reduce';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const initial = { count: 0 };

const state = reduce(reducer, initial);

const increment = () => ({ type: 'increment' });
const decrement = () => ({ type: 'decrement' });
</script>
```
