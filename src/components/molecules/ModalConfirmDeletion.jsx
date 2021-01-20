import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../templates/Modal';
import H1 from '../atoms/texts/H1';
import H2 from '../atoms/texts/H2';
import WrapperButtonsConfirmAndCancel from './WrapperButtonsConfirmAndCancel';

const ModalConfirmDeletion = ({
  name,
  toggleConfirmationModal,
  deleteCategory,
  heading,
}) => {
  const confirmDeletion = () => {
    deleteCategory();
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
        confirmOnClick={confirmDeletion}
      />
    </Modal>
  );
};

ModalConfirmDeletion.propTypes = {
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleConfirmationModal: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
};

export default ModalConfirmDeletion;
