import React from 'react';
import PropTypes from 'prop-types';
import StyledModal from '../../../../../../../styledComponents/modal/StyledModal';
import H1 from '../../../../../../../styledComponents/typography/H1';
import H2 from '../../../../../../../styledComponents/typography/H2';
import WrapperButtonsConfirmAndCancel from '../../../../../../../molecules/WrapperButtonsConfirmAndCancel';
import ChangeQuantityInputAndButtons from '../../../../../../../molecules/ChangeQuantityInputAndButtons';

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
    <StyledModal>
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
