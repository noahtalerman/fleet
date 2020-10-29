import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { routerReducer } from 'react-router-redux';

import app from './nodes/app/reducer';
import auth from './nodes/auth/reducer';
import components from './nodes/components/reducer';
import entities from './nodes/entities/reducer';
import errors from './nodes/errors/reducer';
import notifications from './nodes/notifications/reducer';
import persistentFlash from './nodes/persistent_flash/reducer';
import redirectLocation from './nodes/redirectLocation/reducer';

export default combineReducers({
  app,
  auth,
  components,
  entities,
  errors,
  loadingBar: loadingBarReducer,
  notifications,
  persistentFlash,
  redirectLocation,
  routing: routerReducer,
});
