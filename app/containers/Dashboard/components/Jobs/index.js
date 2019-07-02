import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Bar,
  ResponsiveContainer
} from 'recharts';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// TODO: implemets path alias
import { EmptyPlaceholder } from '../../../../components/EmptyPlaceholder';

import * as selectors from '../../selectors';

import { CounterWrapper, Counter, CounterTitle, Wrapper, GridWrapper } from './styled';

const makeCounters = (data) => (
  <Grid container justify="center" spacing={2}>
    {
      data.map((item) => (
        <Grid key={item.key} item xs={data.lenght}>
          <CounterWrapper>
            <Counter end={item.value} preserveValue />
            <CounterTitle>{item.key}</CounterTitle>
          </CounterWrapper>
        </Grid>
      ))
    }
  </Grid>
);

const Component = (props) => {
  const { isAvalaible, radarChartData, barChartData, currentStateName } = props;

  return (
    <Wrapper>
      <Divider
        style={{
          marginBottom: '20px'
        }}
      />

      {
        !isAvalaible
          ? (
            <EmptyPlaceholder>No availbale data.</EmptyPlaceholder>
          )
          : (
            <Fragment>
              {makeCounters(radarChartData)}

              <GridWrapper
                container
                justify="center"
              >
                <Grid item xs={12} md={6}>
                  <ResponsiveContainer width="99%" height="100%" minHeight="500px">
                    <BarChart
                      data={barChartData}
                      margin={{
                        top: 20, right: 30, left: 20, bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="key"
                        style={{
                          textTransform: 'capitalize'
                        }}
                      />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar name="USA" dataKey="value" stackId="a" fill="#8884d8" />
                      {
                        currentStateName
                        && (
                          <Bar
                            name={currentStateName}
                            dataKey="secondValue"
                            stackId="a"
                            fill="#82ca9d"
                          />
                        )
                      }
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>

                <Grid item xs={12} md={6}>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                    minHeight="500px"
                  >
                    <RadarChart
                      data={radarChartData}
                    >
                      <PolarGrid />
                      <PolarAngleAxis
                        dataKey="key"
                        orientation="inner"
                        style={{
                          textTransform: 'capitalize'
                        }}
                      />
                      <PolarRadiusAxis />
                      <Radar
                        name="USA"
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </Grid>
              </GridWrapper>
            </Fragment>
          )
      }
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  isAvalaible: selectors.selectIsJobsDataAvalaible(state),
  currentStateName: selectors.selectCurrentStateName(state),
  radarChartData: selectors.selectJobsForRadarChart(state),
  barChartData: selectors.selectJobsForBarChart(state)
});

Component.propTypes = {
  isAvalaible: PropTypes.bool.isRequired,
  currentStateName: PropTypes.string,
  radarChartData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.number
  })).isRequired,
  barChartData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.number,
    secondValue: PropTypes.number
  })).isRequired
};

Component.defaultProps = {
  currentStateName: ''
};

export const JobsPanel = connect(
  mapStateToProps,
  null
)(Component);
