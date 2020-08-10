import React from 'react';
import PropTypes from 'prop-types';
import db from '../../../fbase';
import Modal from '../../templates/Modal';
import sampleData from '../../../data/db.json';

import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';
import H1 from '../../atoms/texts/H1';
import H2 from '../../atoms/texts/H2';

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
      {sampleData.products.map(product => (
        <H2 italic key={product.id}>
          {product.name}
        </H2>
      ))}
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
