import styled, { css } from 'styled-components';
import CountUp from 'react-countup';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const CounterWrapper = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 160px;
    height: 170px;
    padding: 0 10px 10px;
    background: ${({ theme }) => theme.palette.secondary.main};

    ${({ theme }) => css`
      ${theme.breakpoints.down('md')} {
        width: 110px;
        height: 115px;
      }
    `}
  }
`;

export const Counter = styled(CountUp)`
  font-size: 54px;
  font-weight: bold;

  ${({ theme }) => css`
    ${theme.breakpoints.down('md')} {
      font-size: 32px;
    }
  `}
`;

export const CounterTitle = styled.h6`
  margin: 0;
  font-size: 18px;
  text-transform: capitalize;
  opacity: .6;

  ${({ theme }) => css`
    ${theme.breakpoints.down('md')} {
      font-size: 14px;
    }
  `}
`;

export const Wrapper = styled.div`
  padding: 0 10px 10px;
  background: ${({ theme }) => theme.palette.common.white};
`;

export const GridWrapper = styled(Grid)`
  padding: 40px 20px 20px;

  ${({ theme }) => css`
    ${theme.breakpoints.down('sm')} {
      padding: 20px 0 0;
    }
  `}
`;
