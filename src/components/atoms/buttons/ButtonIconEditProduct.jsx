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
  color: ${props => props.theme.background};
  background-color: ${props => props.theme.grey60};
  border-radius: 25px;
  font-size: 15px;
  transition: all 0.1s;

  &:hover {
    color: ${({ theme }) => theme.background};
    background-color: ${props => props.theme.primary};
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
