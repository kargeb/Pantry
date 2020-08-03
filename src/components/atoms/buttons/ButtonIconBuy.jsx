import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 55px;
  height: 30px;
  border: none;
  color: ${props => props.theme.grey60};
  background-color: ${({ theme }) => theme.background};
  /* border: 1px solid ${({ theme }) => theme.background}; */
  border-radius: 25px;
  font-size: 24px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    color: ${({ theme }) => theme.primary};
    box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;

const ButtonIconBuy = ({ onClick }) => (
  <Button onClick={onClick}>
    <FontAwesomeIcon icon={faCartArrowDown} />
  </Button>
);

ButtonIconBuy.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonIconBuy;
