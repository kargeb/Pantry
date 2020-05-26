import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background-color: inherit;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 35px;
  color: rgba(0, 0, 0, 0.8);
`;

const ButtonIconSwitch = ({ onClick, themeName }) => (
  <Button onClick={onClick}>
    {themeName == 'lightTheme' ? (
      <Icon icon={faToggleOff} />
    ) : (
      <Icon icon={faToggleOn} />
    )}
  </Button>
);

export default ButtonIconSwitch;
