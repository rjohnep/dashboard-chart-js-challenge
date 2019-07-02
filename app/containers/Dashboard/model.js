import rawStates from './data/states.json';
import rawJobs from './data/jobs.json';
import rawPoppulation from './data/population.csv';

export const mapToArray = (obj) => Object.entries(obj).map(
  ([key, value]) => ({
    key,
    value
  })
);

export const arrayToMap = (array, keyField) => array.reduce(
  (acc, { [keyField]: key, ...item }) => {
    // key is omitted
    // Data mautating in this case only for decreasing time complexity
    // {...acc, [item.name]: item}
    // to avoid spread "loop in loop"
    acc[key] = item;

    return acc;
  },
  // eslint-disable-next-line object-curly-newline
  {}
);

export const mergeDataMapsToArray = (firstMap, secondMap) => Object
  .entries(firstMap)
  .map(
    ([key, value]) => ({
      key,
      value,
      secondValue: secondMap[key]
    })
  );

const getSummaryMapByKeys = ([first, ...arr]) => arr
  .flatMap((item) => Object.entries(item))
  .reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: Number(acc[key] + value)
    }),
    first
  );

const initialJobs = arrayToMap(rawJobs, 'name');
const initialPopulation = arrayToMap(
  rawPoppulation,
  'State'
);

export const initialState = {
  currentState: undefined,
  states: mapToArray(rawStates),
  jobs: initialJobs,
  jobsSummary: getSummaryMapByKeys(Object.values(initialJobs)),
  population: initialPopulation,
  populationSummary: getSummaryMapByKeys(Object.values(initialPopulation))
};

export const setActiveState = (state, activeState) => ({
  ...state,
  currentState: activeState
});

export const resetActiveState = (state) => ({
  ...state,
  currentState: initialState.currentState
});
