import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

 import reducers  from './reducers'
import App from './App'
import {loadState, saveState} from './reducers/localstorage'
const persistedState = loadState();

const store = createStore(
  combineReducers({
    ...reducers
  }),
  persistedState
  );
  store.subscribe(() =>{
    saveState(store.getState())
  })
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
