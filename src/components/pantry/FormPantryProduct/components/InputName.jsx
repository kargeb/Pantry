import React from 'react';
import styled from 'styled-components';
import Label from '../../../atoms/formElements/Label';
import Input from '../../../atoms/formElements/Input';

const InputVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputName = ({ handleForm, name }) => {
  return (
    <InputVerticalWrapper>
      <Label htmlFor="name">Nazwa</Label>
      <Input id="name" type="text" onChange={handleForm} value={name} />
    </InputVerticalWrapper>
  );
};

export default InputName;
