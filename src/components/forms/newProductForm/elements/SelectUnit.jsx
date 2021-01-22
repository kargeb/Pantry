import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledSelect from '../../../styledComponents/formElements/StyledSelect';
import StyledProductLabel from '../../../styledComponents/formElements/labels/StyledProductLabel';

const InputHorizontalWrapper = styled.div`
  display: flex;
  min-width: 120px;
  flex: 1;

  align-items: center;
  justify-content: space-between;
  align-items: baseline;
`;

const SelectUnit = ({ handleForm, unit, errorMessage }) => {
  return (
    <>
      <InputHorizontalWrapper>
        <StyledProductLabel htmlFor="unit">Unit</StyledProductLabel>
        <StyledSelect short id="unit" onChange={handleForm} value={unit}>
          <option value="item">item</option>
          <option value="btl.">btl.</option>
          <option value="pack">pack</option>
          <option value="l">l</option>
          <option value="ml">ml</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
        </StyledSelect>
      </InputHorizontalWrapper>
      {/* {errorMessage.length !== 0 && <p>{errorMessage}</p>} */}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

SelectUnit.defaultProps = {
  errorMessage: '',
};

SelectUnit.propTypes = {
  handleForm: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default SelectUnit;
