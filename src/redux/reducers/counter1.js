
import { ADD, SUB, ADD_NUMBER } from '../actions/actionTypes'
const initialState = {
  counter: 100
}
export default function counter1(state = initialState, { type, value }) {
  switch (type) {
    case ADD:
      return {
        counter: state.counter + 1
      }
    case SUB:
      return {
        counter: state.counter - 1
      }
    case ADD_NUMBER:
      return {
        counter: state.counter + value
      }
    default:
      return state
  };
}

