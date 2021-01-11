import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../templates/Modal';
import H1 from '../atoms/texts/H1';
import H2 from '../atoms/texts/H2';
import WrapperButtonsConfirmAndCancel from './WrapperButtonsConfirmAndCancel';

const ModalConfirmDeletion = ({ name, toggleConfirmationModal, handleDeleteCategory, heading }) => {
  const handleConfirmDelete = () => {
    handleDeleteCategory();
    toggleConfirmationModal();
  };

  return (
    <Modal>
      <H1 marginBottomDouble>{heading}</H1>
      <H2 italic marginBottom>
        {name}
      </H2>
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleConfirmationModal}
        confirmOnClick={handleConfirmDelete}
      />
    </Modal>
  );
};

ModalConfirmDeletion.propTypes = {
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleConfirmationModal: PropTypes.func.isRequired,
  handleDeleteCategory: PropTypes.func.isRequired,
};

export default ModalConfirmDeletion;
