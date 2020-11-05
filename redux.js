const redux = require('redux')

const InitialState = {
  counter: 0
}
//Reducer
const reducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case 'ADD':
      return { counter: state.counter + payload }
    case 'MINUS':
      return { counter: state.counter - payload }
    default:
      return state
  }
}

//Store
const store = redux.createStore(reducer)
store.subscribe(() => { console.log('Subscribe', store.getState()) })

//Actions
const actionAdd = {
  type: 'ADD',
  payload: 2,
}

const actionMinus = {
  type: 'MINUS',
  payload: 20,
}

store.dispatch({type: 'ADD',payload: 20}})
store.dispatch({type: 'MINUS',payload: 20}})
store.dispatch({type: 'MINUS',payload: 20}})
