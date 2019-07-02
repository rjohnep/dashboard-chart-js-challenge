import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Tooltip,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  ResponsiveContainer
} from 'recharts';

import * as selectors from '../../selectors';
import { Wrapper } from './styled';

const Component = (props) => {
  const { isAvalaible, currentStateName, lineChartData } = props;

  return (
    <Wrapper>
      <ResponsiveContainer width="99%" height="100%" minHeight="500px">
        <LineChart
          data={lineChartData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            name="USA"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{
              r: 8
            }}
          />
          {isAvalaible && currentStateName && (
            <Line
              type="monotone"
              name={currentStateName}
              dataKey="secondValue"
              stroke="#82ca9d"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  isAvalaible: selectors.selectIsPopulatioDataAvalaible(state),
  currentStateName: selectors.selectCurrentStateName(state),
  lineChartData: selectors.selectPopulationForLineChart(state)
});

Component.propTypes = {
  isAvalaible: PropTypes.bool.isRequired,
  currentStateName: PropTypes.string,
  lineChartData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.number,
    secondValue: PropTypes.number
  })).isRequired
};

Component.defaultProps = {
  currentStateName: ''
};

export const PopulationPanel = connect(
  mapStateToProps,
  null
)(Component);
