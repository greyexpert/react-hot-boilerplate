import { combineReducers } from 'redux';
import { handleActions, createAction, combineActions } from 'redux-actions';

import sleep from 'sleep-promise';

// Helpers
const fethInfo = () => fetch('https://randomuser.me/api')
  .then(result => result.json())
  .then(({results: [user]}) => user);

// Actions
const logInStart = createAction('LOGIN_START');
const logInEnd = createAction('LOGIN_END');
const logInSuccess = createAction('LOGIN_SUCCESS', ({
  name, email, gender, dob: birthdate, picture: {large: image}
}) => ({
  name: `${name.first} ${name.last}`,
  email, gender, birthdate, image,
}));

const logInFailure = createAction('LOGIN_FAILURE', (userError = null, passError = null) => ({
  username: userError,
  password: passError
}));

export const logOut = createAction('LOGOUT');

export const logIn = (name, pass) => async (dispatch) => {
  const userError = name !== 'grey' ? 'Username is invalid' : null;
  const passError = pass !== 'grey' ? 'Password is invalid' : null;

  dispatch(logInStart());

  if (userError || passError) {
    dispatch(logInFailure(userError, passError));
  } else {
    const user = await fethInfo();
    dispatch(logInSuccess(user));
  }

  dispatch(logInEnd());
};

// Reducers
const authenticated = handleActions({
    [logInSuccess]: () => true,
    [logOut]: () => false,
}, false);

const initialErrors = {username: null, password: null};
const errors = handleActions({
    [logInSuccess]: () => initialErrors,
    [logInFailure]: (state, action) => ({ ...state, ...action.payload })
}, initialErrors);

const authenticating = handleActions({
    [logInStart]: () => true,
    [logInEnd]: () => false
}, false);

const info = handleActions({
  [logOut]: () => ({}),
  [logInSuccess]: (state, { payload: user }) => user
}, {});

const auth = combineReducers({
  authenticated,
  authenticating,
  errors
})

// Main reducer
export default combineReducers({
  auth,
  info
});

// Selectors
export const isAuthenticating = ({ auth }) => auth.authenticating;
export const isAuthenticated = ({ auth }) => auth.authenticated;
export const getInfo = ({ info }) => info;
export const getLoginErrors = ({ auth }) => auth.errors;
