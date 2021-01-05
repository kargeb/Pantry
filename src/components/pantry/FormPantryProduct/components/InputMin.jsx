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

const InputMin = ({ handleForm, min, preventProhibitedCharacters }) => {
  return (
    <InputHorizontalWrapper>
      <Label htmlFor="min">Min</Label>
      <Input
        short
        id="min"
        type="number"
        onKeyDown={preventProhibitedCharacters}
        onChange={handleForm}
        value={min}
      />
    </InputHorizontalWrapper>
  );
};

InputMin.propTypes = {
  handleForm: PropTypes.func.isRequired,
  preventProhibitedCharacters: PropTypes.func.isRequired,
  min: PropTypes.any.isRequired,
};

export default InputMin;
