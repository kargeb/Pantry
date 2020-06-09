import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background-color: white;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 45px;
  color: rgba(0, 0, 0, 0.4);
`;

const ButtonIconCancel = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={faTimesCircle} />
  </Button>
);

export default ButtonIconCancel;
