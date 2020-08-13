import React from 'react';
import styled from 'styled-components';
import Modal from '../../templates/Modal';
import H1 from '../../atoms/texts/H1';
import H2 from '../../atoms/texts/H2';
import Input from '../../atoms/formElements/Input';
import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';
import ChangeQuantityInputAndButtons from '../../molecules/ChangeQuantityInputAndButtons';

const WrapperChangeQuantity = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
`;

const ButtonQuantity = styled.button`
  font-family: inherit;
  width: 40px;
  height: 28px;
  line-height: 28px;
  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.textPrimary};
  border-radius: 4px;
  font-size: 28px;
  font-weight: 500;
`;

// const InputNumber = styled(Input)`
//   text-align: center;
//   width: 44px;
//   height: 44px;
//   padding: 0;
//   margin: 0;
//   color: black;
//   font-size: 28px;
//   line-height: 44px;
// `;

const InputNumber = styled(Input)`
  border: none;
  color: ${props => props.theme.textPrimary};
  text-align: center;
  width: 44px;
  height: 44px;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 34px;
  line-height: 44px;
`;

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
