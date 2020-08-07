import React from 'react';
import styled from 'styled-components';
import Modal from '../../../templates/Modal';
import H1 from '../../../atoms/texts/H1';
import Input from '../../../atoms/formElements/Input';
import Label from '../../../atoms/formElements/Label';
import ButtonQuantity from '../../../atoms/buttons/ButtonQuantity';
import Button from '../../../atoms/buttons/Button';
import WrapperButtonsConfirmAndCancel from '../../../molecules/WrapperButtonsConfirmAndCancel';
import ChangeQuantitySection from './ChangeQuantitySection';
import EditDeleteButtonsSection from './EditDeleteButtonsSection';

const WrapperEditDeleteButtons = styled.div`
  margin-top: 30px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormChangeQuantity = ({
  name,
  subtractQuantity,
  toggleEditProductForm,
  quantity,
  updateProductQuantity,
  toggleChangeQuantityModal,
  handleInput,
  toggleDeleteModal,
  addQuantity,
}) => {
  return (
    <Modal>
      <H1 marginBottom>{name}</H1>

      <Label htmlFor="currentQuantity">Zmień ilość</Label>
      <ChangeQuantitySection
        quantity={quantity}
        handleInput={handleInput}
        subtractQuantity={subtractQuantity}
        addQuantity={addQuantity}
      />
      {/* <WrapperChangeQuantity>
        <ButtonQuantity onClick={subtractQuantity}>-</ButtonQuantity>

        <InputNumber
          short
          className="withoutSpinButtons"
          type="number"
          id="currentQuantity"
          value={quantity}
          onChange={handleInput}
        />
        <ButtonQuantity onClick={addQuantity}>+</ButtonQuantity>
      </WrapperChangeQuantity> */}
      <EditDeleteButtonsSection
        toggleEditProductForm={toggleEditProductForm}
        toggleDeleteModal={toggleDeleteModal}
      />
      {/* <WrapperEditDeleteButtons>
        <Button
          type="button"
          onClick={() => {
            toggleEditProductForm();
          }}
        >
          Edytuj
        </Button>
        <Button type="button" onClick={toggleDeleteModal}>
          Usuń
        </Button>
      </WrapperEditDeleteButtons> */}
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleChangeQuantityModal}
        confirmOnClick={updateProductQuantity}
      />
    </Modal>
  );
};

export default FormChangeQuantity;
