// import localstorage from 'localstorage';

import {Map} from 'immutable';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState) {

      var a = {
        is: 1
      };
      var b = new Map(a);

      var temp = JSON.parse(serializedState);

      var data = {};
      Object
        .keys(temp)
        .forEach(function (k, value) {
          data[k] = new Map(temp[k])
        });

      return data

      // return JSON.parse(serializedState);
    } else {
      return undefined;
    }

  } catch (err) {
    return err;
  }

}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    console.log(serializedState);
    localStorage.setItem('state', serializedState);
  } catch (err) {}

}