import React from 'react';
import PropTypes from 'prop-types';
import StyledModalBody from './elements/StyledModalBody';
import StyledModalBackground from './elements/StyledModalBackground';

const StyledModal = ({ children, toggleModal }) => {
  const closeModalOnBackgroundClick = e => {
    if (e.target.dataset.background) {
      e.stopPropagation();
      toggleModal();
    }
  };

  return (
    <StyledModalBackground
      blurBackground
      data-background
      onClick={e => closeModalOnBackgroundClick(e)}
    >
      <StyledModalBody>{children}</StyledModalBody>
    </StyledModalBackground>
  );
};

StyledModal.defaultProps = {
  toggleModal: () => {},
};

StyledModal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleModal: PropTypes.func,
};

export default StyledModal;
