import React from 'react';
import Modal from '../../templates/Modal';
import H1 from '../../atoms/texts/H1';
import H2 from '../../atoms/texts/H2';
import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';
import ChangeQuantityInputAndButtons from '../../molecules/ChangeQuantityInputAndButtons';

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
    <Modal>
      <H1 marginBottomDouble>Ile chcesz kupić?</H1>
      <H2 italic marginBottom>
        {name}
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
    </Modal>
  );
};

export default ModalBuyProduct;
