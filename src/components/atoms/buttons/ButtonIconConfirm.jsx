import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background-color: ${props => props.theme.background};
  transition: all 0.1s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 45px;
  color: ${({ theme }) => theme.primary};
`;

const ButtonIconConfirm = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={faCheckCircle} />
  </Button>
);

ButtonIconConfirm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonIconConfirm;
