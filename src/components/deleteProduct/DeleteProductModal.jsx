import React from 'react';

import db from '../../fbase';
import Modal from '../templates/ModalTemplate';
import TextHeader from '../atoms/texts/TextHeader';
import TextLabel from '../atoms/texts/TextLabel';
import ConfirmAndCancelButtonsWrapper from '../molecules/ConfirmAndCancelButtonsWrapper';

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
      <TextHeader>Potwierdź usunięcie:</TextHeader>
      <TextLabel>{name}</TextLabel>
      <ConfirmAndCancelButtonsWrapper
        cancelOnClick={toggleDeleteModal}
        confirmOnClick={deleteProduct}
      />
    </Modal>
  );
};

export default DeleteProductModal;
