import React from 'react';
import styled from 'styled-components';
import Modal from '../../templates/Modal';
import H1 from '../../atoms/texts/H1';
import Label from '../../atoms/formElements/Label';
import Input from '../../atoms/formElements/Input';
import Select from '../../atoms/formElements/Select';
import Alert from '../../molecules/Alert';
import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';
import SelectCategory from './SelectCategory';

const InputVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputHorizontalWrapper = styled.div`
  display: flex;
  min-width: 90px;
  flex: 1;

  align-items: center;
  justify-content: space-between;
  align-items: baseline;
`;

const FormPantryProduct = ({ id, toggleFormVisibility, state, handleForm, handleSubmit }) => {
  const { name, quantity, unit, min, category, isAlertVisible } = state;
  return (
    <Modal>
      <H1 marginBottomDouble>{id ? 'Edytuj produkt' : 'Nowy produkt'}</H1>
      <InputVerticalWrapper>
        <Label htmlFor="name">Nazwa</Label>
        <Input id="name" type="text" onChange={handleForm} value={name} />
      </InputVerticalWrapper>
      <SelectCategory handleForm={handleForm} category={category} />
      <InputHorizontalWrapper>
        <Label htmlFor="unit">Typ</Label>
        <Select short id="unit" onChange={handleForm} value={unit}>
          <option value="szt">szt</option>
          <option value="l">l</option>
          <option value="kg">kg</option>
        </Select>
      </InputHorizontalWrapper>
      <InputHorizontalWrapper>
        <Label htmlFor="min">Min</Label>
        <Input
          short
          id="min"
          type="number"
          placeholder="minimalna ilość"
          onChange={handleForm}
          value={min}
        />
      </InputHorizontalWrapper>
      <InputHorizontalWrapper>
        <Label htmlFor="quantity">Ilość</Label>
        <Input short id="quantity" type="number" onChange={handleForm} value={quantity} />
      </InputHorizontalWrapper>
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleFormVisibility}
        confirmOnClick={handleSubmit}
      />
      {isAlertVisible && <Alert>Są puste pola!</Alert>}
    </Modal>
  );
};

export default FormPantryProduct;
