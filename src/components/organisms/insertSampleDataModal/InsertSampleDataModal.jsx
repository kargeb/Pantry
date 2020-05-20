import React from 'react';
import db from '../../../fbase';
import Modal from '../../templates/ModalTemplate';
import sampleData from '../../../data/db.json';

import TextLabel from '../../atoms/texts/TextLabel';
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
      <TextLabel>Mąka</TextLabel>
      <TextLabel>Coca-cola</TextLabel>
      <TextLabel>Tyskie</TextLabel>
      <TextLabel>Biszkopty</TextLabel>
      <TextHeader marginTop>Kontynuować ?</TextHeader>
      <ConfirmAndCancelButtonsWrapper
        cancelOnClick={toggleInsertModal}
        confirmOnClick={insertDataAndCloseModal}
      />
    </Modal>
  );
};

export default InsertSampleDataModal;
