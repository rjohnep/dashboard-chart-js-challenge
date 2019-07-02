import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';

import { JobsPanel } from './components/Jobs';
import { PopulationPanel } from './components/Population';

import * as actions from './actions';
import * as selectors from './selectors';

import { NavigationPanel, StyledAutocomplete } from './styled';

class Container extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };

    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.handleTabs = this.handleTabs.bind(this);
  }

  getRenderInput = (params) => (
    <TextField
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...params}
      label="Choose a State"
      variant="outlined"
      fullWidth
    />
  );

  handleAutocomplete(_, value) {
    const { setActiveState, resetActiveState } = this.props;

    if (value) {
      return setActiveState(value);
    }

    return resetActiveState();
  }

  handleTabs(_, value) {
    this.setState({
      activeTab: value
    });
  }

  render() {
    const { activeTab } = this.state;
    const { states } = this.props;

    return (
      <Fragment>
        <NavigationPanel>
          <StyledAutocomplete
            options={states}
            autoHighlight
            getOptionLabel={(option) => option.value}
            renderOption={(item) => (
              <Fragment>
                {item.value}
              </Fragment>
            )}
            renderInput={this.getRenderInput}
            onChange={this.handleAutocomplete}
          />

          <Tabs
            value={activeTab}
            onChange={this.handleTabs}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="JOBS" />
            <Tab label="POPULATION" />
          </Tabs>
        </NavigationPanel>

        {
          activeTab === 0
            ? <JobsPanel />
            : <PopulationPanel />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  states: selectors.selectStates(state)
});

const mapDispatchToProps = (dispatch) => ({
  setActiveState: (stateCode) => {
    dispatch(actions.setActiveState(stateCode));
  },
  resetActiveState: () => {
    dispatch(actions.resetActiveState());
  }
});

Container.propTypes = {
  states: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string
  })).isRequired,

  setActiveState: PropTypes.func.isRequired,
  resetActiveState: PropTypes.func.isRequired
};

export const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
