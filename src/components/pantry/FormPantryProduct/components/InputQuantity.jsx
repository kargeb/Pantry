import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../../../atoms/formElements/Label';
import Input from '../../../atoms/formElements/Input';

const InputHorizontalWrapper = styled.div`
  display: flex;
  min-width: 120px;
  flex: 1;

  align-items: center;
  justify-content: space-between;
  align-items: baseline;
`;

const InputQuantity = ({ handleForm, quantity }) => {
  return (
    <InputHorizontalWrapper>
      <Label htmlFor="quantity">Quantity</Label>
      <Input short id="quantity" type="number" onChange={handleForm} value={quantity} />
    </InputHorizontalWrapper>
  );
};

InputQuantity.propTypes = {
  handleForm: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default InputQuantity;
