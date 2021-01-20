import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../templates/Modal';
import H1 from '../../../atoms/texts/H1';
import WrapperButtonsConfirmAndCancel from '../../../molecules/WrapperButtonsConfirmAndCancel';
import H2 from '../../../atoms/texts/H2';
import { removeProductFromDatabase } from '../../../../data/handlers';

const DeleteProductModal = ({ id, name, toggleDeleteModal }) => {
  const deleteProduct = () => {
    removeProductFromDatabase(id);
  };

  return (
    <Modal>
      <H1 marginBottomDouble>Confirm remove</H1>
      <H2 italic marginBottom>
        {name}
      </H2>
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleDeleteModal}
        confirmOnClick={deleteProduct}
      />
    </Modal>
  );
};

DeleteProductModal.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
};

export default DeleteProductModal;
