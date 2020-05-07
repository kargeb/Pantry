import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background-color: white;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 45px;
  color: rgba(0, 0, 0, 0.4);
`;

const ButtonCancel = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={faTimesCircle} />
  </Button>
);

export default ButtonCancel;
