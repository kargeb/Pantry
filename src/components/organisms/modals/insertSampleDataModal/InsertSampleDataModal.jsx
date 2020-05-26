import React from 'react';
import db from '../../../fbase';
import Modal from '../../templates/ModalTemplate';
import sampleData from '../../../data/db.json';

import Label from '../../atoms/formElements/Label';
import ConfirmAndCancelButtonsWrapper from '../../molecules/ConfirmAndCancelButtonsWrapper';
import TextHeader from '../../atoms/texts/TextHeader';

const InsertSampleDataModal = ({ toggleInsertModal }) => {
  const uploadSampleData = () => {
    const dbRef = db.collection('products');

    sampleData.products.forEach(sampleProduct => {
      dbRef
        .doc(sampleProduct.id)
        .set({ ...sampleProduct })
        .then(() => console.log('SUCCESSS'))
        .catch(() => console.log('ERROR!!!'));
    });
  };

  const insertDataAndCloseModal = () => {
    uploadSampleData();
    toggleInsertModal();
  };

  return (
    <Modal>
      <TextHeader marginBottom>Wstawione zostaną:</TextHeader>
      <Label>Mąka</Label>
      <Label>Coca-cola</Label>
      <Label>Tyskie</Label>
      <Label>Biszkopty</Label>
      <TextHeader marginTop>Kontynuować ?</TextHeader>
      <ConfirmAndCancelButtonsWrapper
        cancelOnClick={toggleInsertModal}
        confirmOnClick={insertDataAndCloseModal}
      />
    </Modal>
  );
};

export default InsertSampleDataModal;
