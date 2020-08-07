import React from 'react';
import styled from 'styled-components';
import Label from '../../../atoms/formElements/Label';
import Input from '../../../atoms/formElements/Input';

const InputHorizontalWrapper = styled.div`
  display: flex;
  min-width: 90px;
  flex: 1;

  align-items: center;
  justify-content: space-between;
  align-items: baseline;
`;

const InputQuantity = ({ handleForm, quantity }) => {
  return (
    <InputHorizontalWrapper>
      <Label htmlFor="quantity">Ilość</Label>
      <Input short id="quantity" type="number" onChange={handleForm} value={quantity} />
    </InputHorizontalWrapper>
  );
};

export default InputQuantity;
