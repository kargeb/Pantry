import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background-color: inherit;
  font-size: 35px;
  color: ${({ theme }) => theme.textPrimary};
`;

const ButtonIconSwitch = ({ onClick, themeName }) => (
  <Button onClick={onClick}>
    {themeName === 'lightTheme' ? (
      <FontAwesomeIcon icon={faToggleOff} />
    ) : (
      <FontAwesomeIcon icon={faToggleOn} />
    )}
  </Button>
);

ButtonIconSwitch.propTypes = {
  onClick: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default ButtonIconSwitch;
