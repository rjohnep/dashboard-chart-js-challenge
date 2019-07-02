import { createSelector } from 'reselect';

import { mergeDataMapsToArray, mapToArray } from './model';

export const selectStates = (state) => state.dashboard.states;
export const selectCurrentStateCode = (state) => state.dashboard.currentState;
export const selectCurrentStateName = ({ dashboard }) => (
  dashboard.currentState
  && dashboard.currentState.value
);

export const selectJobsSummaryMap = (state) => state.dashboard.jobsSummary;
export const selectJobsByCurrentState = ({ dashboard }) => (
  dashboard.currentState
  && dashboard.jobs[dashboard.currentState.key]
);

export const selectPopulationSummaryMap = (state) => state.dashboard.populationSummary;
export const selectPopulationByCurrentState = ({ dashboard }) => (
  dashboard.currentState
  && dashboard.population[dashboard.currentState.key]
);

export const selectIsJobsDataAvalaible = ({ dashboard }) => (
  !dashboard.currentState
  || (dashboard.currentState && !!dashboard.jobs[dashboard.currentState.key])
);
export const selectIsPopulatioDataAvalaible = ({ dashboard }) => (
  !dashboard.currentState
  || (dashboard.currentState && !!dashboard.population[dashboard.currentState.key])
);

// memoize them
export const selectJobsForRadarChart = createSelector(
  selectJobsByCurrentState,
  selectJobsSummaryMap,
  (jobsByCurrentState, jobsSummary) => (
    jobsByCurrentState
      ? mapToArray(jobsByCurrentState)
      : mapToArray(jobsSummary)
  )
);

export const selectJobsForBarChart = createSelector(
  selectJobsByCurrentState,
  selectJobsSummaryMap,
  (jobsByCurrentState, jobsSummary) => (
    jobsByCurrentState
      ? mergeDataMapsToArray(jobsSummary, jobsByCurrentState)
      : mapToArray(jobsSummary)
  )
);

export const selectPopulationForLineChart = createSelector(
  selectPopulationByCurrentState,
  selectPopulationSummaryMap,
  (populationByCurrentState, populationSummary) => (
    populationByCurrentState
      ? mergeDataMapsToArray(populationSummary, populationByCurrentState)
      : mapToArray(populationSummary)
  )
);
