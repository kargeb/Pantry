import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.background};
  transition: all 0.1s;
  font-size: 45px;
  color: ${({ theme }) => theme.primary};

  &:hover {
    transform: scale(1.2);
  }

  ${({ auth }) =>
    auth &&
    css`
      background-color: #111;
    `};
`;

const ButtonIconConfirm = ({ onClick, auth }) => (
  <Button auth={auth} onClick={onClick}>
    <FontAwesomeIcon icon={faCheckCircle} />
  </Button>
);

ButtonIconConfirm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonIconConfirm;
