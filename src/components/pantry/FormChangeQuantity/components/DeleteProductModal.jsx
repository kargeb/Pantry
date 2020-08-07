import React from 'react';
import PropTypes from 'prop-types';

import db from '../../../../fbase';
import Modal from '../../../templates/Modal';
import H1 from '../../../atoms/texts/H1';
import Label from '../../../atoms/formElements/Label';
import WrapperButtonsConfirmAndCancel from '../../../molecules/WrapperButtonsConfirmAndCancel';

const DeleteProductModal = ({ id, name, toggleDeleteModal }) => {
  const deleteProduct = () => {
    db.collection('products')
      .doc(id)
      .delete()
      .then(function () {
        console.log('Document successfully deleted!');
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
  };

  return (
    <Modal>
      <H1 marginBottomDouble>Potwierdź usunięcie:</H1>
      <Label>{name}</Label>
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
