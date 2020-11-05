import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
import Counter from './Counter';
import thunk from 'redux-thunk';

// const loggerMiddleWare = store => next => action => {
//   console.log('MiddleWare : ', store.getState())
//   return next(action)
// }

const store = createStore(
  rootReducer, applyMiddleware(thunk)
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Counter />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
