import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../templates/Modal';
import sampleData from '../../../data/db.json';

import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';
import H1 from '../../atoms/texts/H1';
import H2 from '../../atoms/texts/H2';
import { logOut } from '../../../data/handlers';

const ConfirmLogoutModal = ({ toggleConfirmLogoutModal }) => {
  const insertDataAndCloseModal = () => {
    logOut();
    toggleConfirmLogoutModal();
  };

  return (
    <Modal>
      <div style={{ textAlign: 'center' }}>
        <H1 marginBottomDouble>Are you sure to logout?</H1>
      </div>
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleConfirmLogoutModal}
        confirmOnClick={insertDataAndCloseModal}
      />
    </Modal>
  );
};

ConfirmLogoutModal.propTypes = {
  toggleConfirmLogoutModal: PropTypes.func.isRequired,
};

export default ConfirmLogoutModal;
