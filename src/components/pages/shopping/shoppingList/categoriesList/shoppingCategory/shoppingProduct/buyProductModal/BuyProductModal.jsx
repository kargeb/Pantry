import React from 'react';
import PropTypes from 'prop-types';
import StyledModal from '../../../../../../../styled/modal/StyledModal';
import H1 from '../../../../../../../styled/typography/H1';
import H2 from '../../../../../../../styled/typography/H2';
import WrapperButtonsConfirmAndCancel from '../../../../../../../shared/confirmCancelButtonsWrapper/ConfirmCancelButtonsWrapper';
import ChangeQuantityInputAndButtons from '../../../../../../../shared/changeQuantityWrapper/ChangeQuantityWrapper';

const ModalBuyProduct = ({
  name,
  subtractQuantity,
  addQuantity,
  toBuy,
  toggleBuyProductModal,
  updateProductQuantity,
  handleInput,
}) => {
  return (
    <StyledModal toggleModal={toggleBuyProductModal}>
      <H1 marginBottomDouble>{name}</H1>
      <H2 italic marginBottom>
        Quantity bought
      </H2>
      <ChangeQuantityInputAndButtons
        subtractQuantity={subtractQuantity}
        addQuantity={addQuantity}
        quantity={toBuy}
        handleInput={handleInput}
      />
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleBuyProductModal}
        confirmOnClick={() => updateProductQuantity(toggleBuyProductModal)}
      />
    </StyledModal>
  );
};

ModalBuyProduct.propTypes = {
  name: PropTypes.string.isRequired,
  toggleBuyProductModal: PropTypes.func.isRequired,
  updateProductQuantity: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subtractQuantity: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  toBuy: PropTypes.number.isRequired,
};

export default ModalBuyProduct;
