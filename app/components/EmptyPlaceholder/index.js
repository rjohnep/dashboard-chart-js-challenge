import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  font-size: 26px;
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const EmptyPlaceholder = (props) => (
  <Wrapper>{props.children}</Wrapper>
);

EmptyPlaceholder.propTypes = {
  children: PropTypes.node.isRequired
};
