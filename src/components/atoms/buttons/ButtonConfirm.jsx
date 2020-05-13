import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background-color: white;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 45px;
  color: ${({ theme }) => theme.primary};
`;

const ButtonConfirm = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={faCheckCircle} />
  </Button>
);

export default ButtonConfirm;
