import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { add, sub, addNumber } from './redux/actions/actions'
class App extends Component {
  render() {
    const { counter, onAdd, onSub, onAddNum } = this.props;
    return (
      <div>
        <div style={{ textAlign: 'center', backgroundColor: 'lightsalmon' }}>
          <div style={{ padding: '10px' }}>  {counter} </div>
          <hr />
          <div style={{ padding: '10px' }}>
            <button onClick={onAdd}>INCREASE</button>
            <button onClick={onSub}>DECREACE</button>
          </div>
          <hr />
          <div style={{ padding: '10px' }}>
            <button onClick={() => onAddNum(10)}>INCREASE 10</button>
            <button onClick={() => onAddNum(-10)}>DECREACE -10</button>
          </div>
        </div>
      </div >
    );
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNum: value => dispatch(addNumber(value)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
