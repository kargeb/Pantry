import React from 'react';
import PropTypes from 'prop-types';
import StyledModal from '../../../styled/modal/StyledModal';

import WrapperButtonsConfirmAndCancel from '../../../molecules/WrapperButtonsConfirmAndCancel';
import H1 from '../../../styled/typography/H1';

import { logOut } from '../../../../database/controller';

const ConfirmLogoutModal = ({ toggleConfirmLogoutModal }) => {
  const insertDataAndCloseModal = () => {
    logOut();
    toggleConfirmLogoutModal();
  };

  return (
    <StyledModal>
      <div style={{ textAlign: 'center' }}>
        <H1 marginBottomDouble>Are you sure to logout?</H1>
      </div>
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleConfirmLogoutModal}
        confirmOnClick={insertDataAndCloseModal}
      />
    </StyledModal>
  );
};

ConfirmLogoutModal.propTypes = {
  toggleConfirmLogoutModal: PropTypes.func.isRequired,
};

export default ConfirmLogoutModal;
