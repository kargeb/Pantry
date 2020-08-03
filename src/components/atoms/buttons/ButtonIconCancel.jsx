import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background-color: ${props => props.theme.background};
  transition: all 0.1s;
  font-size: 45px;
  color: rgba(0, 0, 0, 0.4);

  &:hover {
    transform: scale(1.2);
  }
`;

const ButtonIconCancel = ({ onClick }) => (
  <Button onClick={onClick}>
    <FontAwesomeIcon icon={faTimesCircle} />
  </Button>
);

ButtonIconCancel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonIconCancel;
