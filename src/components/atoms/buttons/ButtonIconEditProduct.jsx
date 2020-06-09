import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 55px;
  height: 35px;
  border: none;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.background};
  font-size: 24px;
  /* color: rgba(0, 0, 0, 0.54); */
  transition: all 0.3s;

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

const ButtonIconEditProduct = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={faPen} />
  </Button>
);

export default ButtonIconEditProduct;
