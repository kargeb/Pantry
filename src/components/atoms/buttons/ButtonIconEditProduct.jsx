import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 45px;
  height: 26px;
  margin: 0 10px;
  border: none;
  color: ${({ theme }) => theme.grey60};
  background-color: ${({ theme }) => theme.background};
  border-radius: 25px;
  font-size: 15px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.1s;

  &:hover {
    color: ${({ theme }) => theme.primary};
    box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;

const ButtonIconEditProduct = ({ onClick }) => (
  <Button onClick={onClick}>
    <FontAwesomeIcon icon={faPen} />
  </Button>
);

ButtonIconEditProduct.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonIconEditProduct;
