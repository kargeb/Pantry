import React from 'react';

import Modal from '../../../templates/Modal';
import H1 from '../../../atoms/texts/H1';
import Alert from '../../../molecules/Alert';
import WrapperButtonsConfirmAndCancel from '../../../molecules/WrapperButtonsConfirmAndCancel';
import SelectCategory from './SelectCategory';
import InputName from './InputName';
import SelectUnit from './SelectUnit';
import InputMin from './InputMin';
import InputQuantity from './InputQuantity';

const FormPantryProduct = ({ id, toggleFormVisibility, state, handleForm, handleSubmit }) => {
  const { name, quantity, unit, min, category, isAlertVisible } = state;
  return (
    <Modal>
      <H1 marginBottomDouble>{id ? 'Edytuj produkt' : 'Nowy produkt'}</H1>
      <InputName handleForm={handleForm} name={name} />
      <SelectCategory handleForm={handleForm} category={category} />
      <SelectUnit handleForm={handleForm} category={unit} />
      <InputMin handleForm={handleForm} min={min} />
      <InputQuantity handleForm={handleForm} quantity={quantity} />
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleFormVisibility}
        confirmOnClick={handleSubmit}
      />
      {isAlertVisible && <Alert>Są puste pola!</Alert>}
    </Modal>
  );
};

export default FormPantryProduct;
