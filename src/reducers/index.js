import { combineReducers } from 'redux';
import user, * as fromUser from './user';

// Root reducer
export default combineReducers({
  user
});

// Global selectors
export const isUserLoggedIn = ({ user }) => fromUser.isLoggedIn(user);
