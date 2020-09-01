import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" onChange={handleForm} value={name} />
    </InputVerticalWrapper>
  );
};

InputName.propTypes = {
  handleForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputName;
