import { combineReducers } from 'redux';

import ForgotPasswordPage from './ForgotPasswordPage/reducer';
import ManageHostsPage from './ManageHostsPage/reducer';
import QueryPages from './QueryPages/reducer';
import ResetPasswordPage from './ResetPasswordPage/reducer';
import ErrorNotification from './ErrorNotification/reducer';

export default combineReducers({
  ForgotPasswordPage,
  ManageHostsPage,
  QueryPages,
  ResetPasswordPage,
  ErrorNotification,
});
