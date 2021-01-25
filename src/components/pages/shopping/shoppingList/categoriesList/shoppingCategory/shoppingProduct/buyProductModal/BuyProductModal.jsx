import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledModal from '../../../../../../../styled/modal/StyledModal';
import H1 from '../../../../../../../styled/typography/H1';
import H2 from '../../../../../../../styled/typography/H2';
import WrapperButtonsConfirmAndCancel from '../../../../../../../shared/confirmCancelButtonsWrapper/ConfirmCancelButtonsWrapper';
import ChangeQuantityInputAndButtons from '../../../../../../../shared/changeQuantityWrapper/ChangeQuantityWrapper';
import P from '../../../../../../../styled/typography/StyledP';

const StyledP = styled(P)`
  /* margin-top: -10px; */
  padding: 10px 0 0 0;
  font-weight: bold;
  color: #ff2e00;
`;

const ModalBuyProduct = ({
  name,
  subtractQuantity,
  addQuantity,
  toBuy,
  toggleBuyProductModal,
  updateProductQuantity,
  handleInput,
  errorMessage,
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
      {errorMessage && <StyledP>{errorMessage}</StyledP>}
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
