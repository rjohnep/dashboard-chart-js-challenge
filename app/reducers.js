import { combineReducers } from 'redux';

import { dashboardReducer } from './containers/Dashboard/reducer';

export const rootReducer = combineReducers({
  // TODO: implement dynamic injections
  dashboard: dashboardReducer
});
