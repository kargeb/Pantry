import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 55px;
  height: 40px;
  border: none;

  background-color: #fff;
  border-radius: 10px;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.54);
  border: 1px solid #fff;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  /* color: ${({ theme }) => theme.primary}; */
`;

const ButtonIconBuy = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={faCartArrowDown} />
  </Button>
);

export default ButtonIconBuy;
