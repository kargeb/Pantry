import React from 'react';
import PropTypes from 'prop-types';
// import StyledModal from '../../../../ styledComponents/modal/StyledModal';
import StyledModal from '../../../../../../../styledComponents/modal/StyledModal';
import H1 from '../../../../../../../styledComponents/typography/H1';
// import WrapperButtonsConfirmAndCancel from '../../../molecules/WrapperButtonsConfirmAndCancel';
import WrapperButtonsConfirmAndCancel from '../../../../../../../molecules/WrapperButtonsConfirmAndCancel';
import H2 from '../../../../../../../styledComponents/typography/H2';
// import { removeProductFromDatabase } from '../../../../../../../../../data/handlers';
import { removeProductFromDatabase } from '../../../../../../../../data/handlers';

const DeleteProductModal = ({ id, name, toggleDeleteModal }) => {
  const deleteProduct = () => {
    removeProductFromDatabase(id);
  };

  return (
    <StyledModal>
      <H1 marginBottomDouble>Confirm remove</H1>
      <H2 italic marginBottom>
        {name}
      </H2>
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleDeleteModal}
        confirmOnClick={deleteProduct}
      />
    </StyledModal>
  );
};

DeleteProductModal.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
};

export default DeleteProductModal;
