import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledModalBody from './StyledModalBody';
import StyledModalBackground from './StyledModalBackground';

const Modal = ({ children }) => (
  <StyledModalBackground blurBackground>
    <StyledModalBody>{children}</StyledModalBody>
  </StyledModalBackground>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
