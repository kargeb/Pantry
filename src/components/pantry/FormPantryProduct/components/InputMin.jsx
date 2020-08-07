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

const InputMin = ({ handleForm, min }) => {
  return (
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
  );
};

export default InputMin;
