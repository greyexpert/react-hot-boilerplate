import { combineReducers } from 'redux';
import user, * as fromUser from './user';

// Root reducer
export default combineReducers({
  user
});

// Global selectors
export const isUserAuthenticating = ({ user }) => fromUser.isAuthenticating(user);
export const isUserAuthenticated = ({ user }) => fromUser.isAuthenticated(user);
export const getUserInfo = ({ user }) => fromUser.getInfo(user);
export const getUserLoginErrors = ({ user }) => fromUser.getLoginErrors(user);
