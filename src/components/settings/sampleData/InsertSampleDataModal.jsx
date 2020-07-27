import React from 'react';
import PropTypes from 'prop-types';
import db from '../../../fbase';
import Modal from '../../templates/Modal';
import sampleData from '../../../data/db.json';

import Label from '../../atoms/formElements/Label';
import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';
import H1 from '../../atoms/texts/H1';

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
      <H1 marginBottomDouble>Wstawione zostaną:</H1>
      <Label>Mąka</Label>
      <Label>Coca-cola</Label>
      <Label>Tyskie</Label>
      <Label>Biszkopty</Label>
      <H1 marginTop>Kontynuować ?</H1>
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleInsertModal}
        confirmOnClick={insertDataAndCloseModal}
      />
    </Modal>
  );
};

InsertSampleDataModal.propTypes = {
  toggleInsertModal: PropTypes.func.isRequired,
};

export default InsertSampleDataModal;
