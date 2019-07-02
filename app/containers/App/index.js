import React, { Fragment, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Dashboard } from '../Dashboard';

import {
  TopBarPanel,
  DrawerPanel,
  MenuButton,
  ReturnPanel,
  ContnetPanel
} from './styled';

export const App = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((state) => !state);
  };

  return (
    <Fragment>
      <TopBarPanel position="fixed" open={open}>
        <Toolbar>
          <MenuButton
            onClick={toggleDrawer}
            open={open}
          >
            <MenuIcon />
          </MenuButton>

          <Typography variant="h6" noWrap>
            Dashboard Charts Challenge
          </Typography>
        </Toolbar>
      </TopBarPanel>

      <DrawerPanel
        variant="permanent"
        open={open}
      >
        <ReturnPanel>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </ReturnPanel>

        <Divider />

        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </DrawerPanel>

      <ContnetPanel>
        {/* Trick: top bar responsive height */}
        <ReturnPanel />

        {/* TODO: implement react router */}
        <Dashboard />
      </ContnetPanel>
    </Fragment>
  );
};
