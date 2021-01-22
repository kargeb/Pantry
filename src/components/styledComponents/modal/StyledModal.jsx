import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledModalBody from './elements/StyledModalBody';
import StyledModalBackground from './elements/StyledModalBackground';

const StyledModal = ({ children }) => (
  <StyledModalBackground blurBackground>
    <StyledModalBody>{children}</StyledModalBody>
  </StyledModalBackground>
);

StyledModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledModal;
