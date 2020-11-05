import { ADD, SUB, ADD2, SUB2, ADD_NUMBER, ADD_NUMBER2, SET_TEXT } from './actionTypes'

//Это ЭкшнКрееторы тут

export function add() {
  return {
    type: ADD
  }
}

export function sub() {
  return {
    type: SUB
  }
}

export function addNumber(value) {
  return {
    type: ADD_NUMBER,
    value,
  }
}

export function add2() {
  return {
    type: ADD2
  }
}

export function sub2() {
  return {
    type: SUB2
  }
}

export function addNumber2(value) {
  return {
    type: ADD_NUMBER2,
    value,
  }
}

export function setText(value) {
  return {
    type: SET_TEXT,
    value,
  }
}

export function asyncAction() {
  return function (dispatch) {
    // setTimeout(() => {
    //   dispatch(setText('dsdsdsds'))
    // }, 500)
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.text())
      .then(json => dispatch(setText(json)))
  }
}
