import React from 'react';
import db from '../../../fbase';
import Modal from '../../templates/ModalTemplate';

import TextLabel from '../../atoms/texts/TextLabel';
import ConfirmAndCancelButtonsWrapper from '../../molecules/ConfirmAndCancelButtonsWrapper';
import TextHeader from '../../atoms/texts/TextHeader';

const InsertSampleDataModal = ({ id, name, toggleDeleteModal }) => {
  //   const deleteProduct = () => {
  //     db.collection('products')
  //       .doc(id)
  //       .delete()
  //       .then(function () {
  //         console.log('Document successfully deleted!');
  //       })
  //       .catch(function (error) {
  //         console.error('Error removing document: ', error);
  //       });
  //   };

  return (
    <Modal>
      <TextHeader>Wstawione zostaną:</TextHeader>
      <TextLabel>Mąka</TextLabel>
      <TextLabel>Coca-cola</TextLabel>
      <TextLabel>Tyskie</TextLabel>
      <TextLabel>Biszkopty</TextLabel>
      <TextHeader>Kontynuować ?</TextHeader>
      {/* <ConfirmAndCancelButtonsWrapper
        cancelOnClick={toggleDeleteModal}
        confirmOnClick={deleteProduct}
      /> */}
    </Modal>
  );
};

export default InsertSampleDataModal;
