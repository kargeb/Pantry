import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledModalBackground = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 9999;

  ${({ blurBackground }) =>
    blurBackground &&
    css`
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(1px);
    `}
`;

export default StyledModalBackground;
