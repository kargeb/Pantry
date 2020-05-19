import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 55px;
  height: 40px;
  border: none;
  /* background-color: ${({ theme }) => theme.primary}; */
  background-color: #fff;
  /* border: 1px solid ${({ theme }) => theme.primary}; */
  border-radius: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: ${({ theme }) => theme.primary};
`;

const ButtonBuy = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={faCartArrowDown} />
  </Button>
);

export default ButtonBuy;
