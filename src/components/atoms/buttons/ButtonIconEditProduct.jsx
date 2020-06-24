import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 45px;
  height: 26px;
  margin: 0 10px;
  border: none;
  color: ${props => props.theme.background};
  background-color: ${props => props.theme.grey60};
  border-radius: 25px;
  /* border: 1px solid ${props => props.theme.grey60}; */
  font-size: 15px;
  /* color: rgba(0, 0, 0, 0.54); */
  transition: all 0.1s;

  &:hover {
    color: ${({ theme }) => theme.background};
    background-color: ${props => props.theme.primary};
    /* border-radius: 10px; */
    /* border: 1px solid ${({ theme }) => theme.primary}; */
    cursor: pointer;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  /* color: ${({ theme }) => theme.primary}; */
`;

const ButtonIconEditProduct = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={faPen} />
  </Button>
);

export default ButtonIconEditProduct;
