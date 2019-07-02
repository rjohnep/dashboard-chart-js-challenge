import styled, { css } from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 240;

const getTopBarTransitionDefault = (theme) => theme.transitions.create(
  ['width', 'margin'],
  {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }
);
const getTopBarTransitionShift = (theme) => theme.transitions.create(
  ['width', 'margin'],
  {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }
);

export const TopBarPanel = styled(AppBar)`
  && {
    z-index: ${({ theme }) => theme.zIndex.drawer + 1};
    transition: ${({ theme }) => getTopBarTransitionDefault(theme)};

    ${({ open, theme }) => open && css`
      margin-left: ${drawerWidth};
      width: calc(100% - ${drawerWidth}px);
      transition: ${getTopBarTransitionShift(theme)};
    `};
  }
`;

const getDrawerTransitionDefault = (theme) => theme.transitions.create(
  'width',
  {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }
);
const getDrawerTransitionActive = (theme) => theme.transitions.create(
  'width',
  {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }
);

const drawerStyle = css`
  overflow-x: hidden;
  width: ${({ theme }) => theme.spacing(7) + 1}px;
  transition: ${({ theme }) => getDrawerTransitionDefault(theme)};

  ${({ open, theme }) => open && css`
    width: ${drawerWidth}px;
    transition: ${getDrawerTransitionActive(theme)};
  `};
`;

export const DrawerPanel = styled(Drawer)`
  ${drawerStyle};

  .MuiDrawer-paper {
    ${drawerStyle};
  }
`;

export const MenuButton = styled(IconButton)`
  && {
    margin-right: 36px;
    margin-left: -20px;

    ${({ open }) => open && css`
        display: none;
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.down('xs')} {
        margin-left: -10px;
      }
    `}
  }
`;

export const ReturnPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${({ theme }) => theme.mixins.toolbar};
`;

export const ContnetPanel = styled.div`
  width: calc(100% - 57px);
`;
