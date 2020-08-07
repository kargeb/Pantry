import React from 'react';
import styled from 'styled-components';
import Select from '../../../atoms/formElements/Select';
import Label from '../../../atoms/formElements/Label';

const InputHorizontalWrapper = styled.div`
  display: flex;
  min-width: 90px;
  flex: 1;

  align-items: center;
  justify-content: space-between;
  align-items: baseline;
`;

const SelectUnit = ({ handleForm, unit }) => {
  return (
    <InputHorizontalWrapper>
      <Label htmlFor="unit">Typ</Label>
      <Select short id="unit" onChange={handleForm} value={unit}>
        <option value="szt">szt</option>
        <option value="l">l</option>
        <option value="kg">kg</option>
      </Select>
    </InputHorizontalWrapper>
  );
};

export default SelectUnit;
