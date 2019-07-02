import styled, { css } from 'styled-components';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const NavigationPanel = styled.div`
  display: flex;
  flex-direction: row;

  margin: 20px 10px;

  ${({ theme }) => css`
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
    }
  `}
`;

export const StyledAutocomplete = styled(Autocomplete)`
  min-width: 300px;
  margin-right: 40px;

  ${({ theme }) => css`
  ${theme.breakpoints.up('md')} {
      min-width: 30%;
      margin-right: 80px;
    }
    ${theme.breakpoints.down('md')} {
      min-width: auto;
      margin: 0 0 20px;
    }
  `}
`;
