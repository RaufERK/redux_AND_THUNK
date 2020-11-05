import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { add2, sub2, addNumber2, asyncAction } from './redux/actions/actions'

class Counter extends Component {
  render() {
    const { onAdd2, onSub2, onMod2, counter, asyncAction, fetchResult } = this.props;
    return (
      <div style={{ padding: 10, backgroundColor: 'lightcoral', border: '3px solid grey', borderRadius: '10px' }}>
        <Card border="danger" bg='secondary'>
          <Card.Header style={{ textAlign: 'center' }}><h1>Counter {counter}</h1></Card.Header>
          <Card.Body>
            <Button block variant="warning" onClick={onAdd2} >ADD</Button>
            <Button block variant="danger" onClick={onSub2} >SUBB</Button>
            <Button block variant="info" onClick={() => onMod2(10)} >MOD</Button>
            <Button block variant="info" onClick={asyncAction} >ASYNC ACTION</Button>
          </Card.Body>
          <Card.Footer>{fetchResult}</Card.Footer>
        </Card>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter2.counter,
    fetchResult: state.counter2.fetchResult,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd2: () => dispatch(add2()),
    onSub2: () => dispatch(sub2()),
    onMod2: value => dispatch(addNumber2(value)),
    asyncAction: () => dispatch(asyncAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
