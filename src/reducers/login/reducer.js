import {Map} from 'immutable';
import actions from './actions';

let intialState = new Map({idToken: null, isloggedIn: false});
export default function  (state = intialState, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      if (action.data.token !== null) {
        return state.set('idToken', action.data.token );
      } else {
        return state.set('idToken', null);
      }
    case actions.LOGOUT:
      return state.set('idToken', null);

    default:
      return state
  }
}
