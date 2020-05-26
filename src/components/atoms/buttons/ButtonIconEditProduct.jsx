import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 55px;
  height: 40px;
  border: none;
  background-color: #fff;
  border-radius: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  /* color: ${({ theme }) => theme.primary}; */
  color: rgba(0, 0, 0, 0.54);
`;

const ButtonIconEditProduct = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={faPen} />
  </Button>
);

export default ButtonIconEditProduct;
