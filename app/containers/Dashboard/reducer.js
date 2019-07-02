import { handleActions } from 'redux-actions';

import * as actions from './actions';
import * as model from './model';

export const dashboardReducer = handleActions(
  {
    [actions.setActiveState]: (
      state, { payload }
    ) => model.setActiveState(state, payload),
    [actions.resetActiveState]: (state) => model.resetActiveState(state)
  },
  model.initialState
);
