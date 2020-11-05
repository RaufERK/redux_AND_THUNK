import { ADD2, SUB2, ADD_NUMBER2, SET_TEXT } from '../actions/actionTypes'

const initialState = {
  counter: 200,
  fetchResult: '',
}
export default function counter2(state = initialState, { type, value }) {
  switch (type) {
    case ADD2:
      return {
        counter: state.counter + 1
      }
    case SUB2:
      return {
        counter: state.counter - 1
      }
    case ADD_NUMBER2:
      return {
        counter: state.counter + value
      }
    case SET_TEXT:
      return {
        ...state,
        fetchResult: value
      }
    default:
      return state
  };
}

