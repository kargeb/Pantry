import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 55px;
  height: 40px;
  border: none;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.background};
  border-radius: 10px;
  border-radius: 10px;
  font-size: 28px;

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

ButtonIconBuy.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonIconBuy;
