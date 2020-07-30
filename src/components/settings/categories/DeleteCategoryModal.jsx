import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../templates/Modal';
import H1 from '../../atoms/texts/H1';
import Label from '../../atoms/formElements/Label';
import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';

const DeleteCategoryModal = ({ name, toggleDeleteModal, handleDeleteCategory }) => {
  return (
    <Modal>
      <H1 marginBottomDouble>Potwierdź usunięcie kategorii:</H1>
      <Label>{name}</Label>
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleDeleteModal}
        confirmOnClick={handleDeleteCategory}
      />
    </Modal>
  );
};

DeleteCategoryModal.propTypes = {
  name: PropTypes.string.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
};

export default DeleteCategoryModal;
