import { combineReducers } from 'redux';
import { handleActions, createAction } from 'redux-actions';

// Actions
export const logIn = createAction('LOGIN');
export const logOut = createAction('LOGOUT');

// Selectors
export const isLoggedIn = ({ loggedIn }) => loggedIn;

// Reducers
const loggedIn = handleActions({
    [logIn]: () => true,
    [logOut]: () => false,
}, false);

// Main reducer
export default combineReducers({
  loggedIn
});
