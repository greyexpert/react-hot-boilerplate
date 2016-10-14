import { combineReducers } from 'redux';
import { handleActions, createAction, combineActions } from 'redux-actions';

// Actions
const logInSuccess = createAction('LOGIN_SUCCESS');
const logInFailure = createAction('LOGIN_FAILURE', (userError = null, passError = null) => ({
  username: userError,
  password: passError
}));

export const logIn = (name, pass) => (dispatch) => {
  const userError = name !== 'grey' ? 'Username is invalid' : null;
  const passError = pass !== 'grey' ? 'Password is invalid' : null;

  if (userError || passError) {
    dispatch(logInFailure(userError, passError));
  } else {
    dispatch(logInSuccess());
  }
};

export const logOut = createAction('LOGOUT');

// Reducers
const authenticated = handleActions({
    [logInSuccess]: () => true,
    [logOut]: () => false,
}, false);

const initialErrors = {username: null, password: null};
const errors = handleActions({
    [logInSuccess]: () => initialErrors,
    [logOut]: () => initialErrors,
    [logInFailure]: (state, action) => ({ ...state, ...action.payload })
}, initialErrors);

const auth = combineReducers({
  authenticated,
  errors
})

// Main reducer
export default combineReducers({
  auth
});

// Selectors
export const isAuthenticated = ({ auth }) => auth.authenticated;
export const getLoginErrors = ({ auth }) => auth.errors;
