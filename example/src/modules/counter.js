const INCREMENT = 'example/counter/INCREMENT';
const DECREMENT = 'example/counter/DECREMENT';

const initialState = 0;

const reducers = {
  [INCREMENT](state, {payload}) {
    return state + payload;
  },
  [DECREMENT](state, {payload}) {
    return state - payload;
  },
};

export default function reducer(state = initialState, action) {
  // return (reducers[action.type] || id)(state, action);
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}

export function increment(payload) {
  return {type: INCREMENT, payload};
}

export function decrement(payload) {
  return {type: DECREMENT, payload};
}
