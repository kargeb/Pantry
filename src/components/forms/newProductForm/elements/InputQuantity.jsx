import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledProductLabel from '../../../styled/formElements/labels/StyledProductLabel';
import StyledProductInput from '../../../styled/formElements/inputs/StyledProductInput';
import P from '../../../styled/typography/StyledP';

const InputHorizontalWrapper = styled.div`
  display: flex;
  min-width: 120px;
  flex: 1;

  align-items: center;
  justify-content: space-between;
  align-items: baseline;
`;

const StyledP = styled(P)`
  margin-top: -10px;
  padding: 0 0 5px 0;
  color: ${props => props.theme.primary};
`;

const InputQuantity = ({
  handleForm,
  quantity,
  preventProhibitedCharacters,
  errorMessage,
}) => {
  return (
    <>
      <InputHorizontalWrapper>
        <StyledProductLabel htmlFor="quantity">Quantity</StyledProductLabel>
        <StyledProductInput
          short
          id="quantity"
          type="number"
          onChange={handleForm}
          onKeyDown={preventProhibitedCharacters}
          value={quantity}
          min="0"
        />
      </InputHorizontalWrapper>
      {errorMessage && <StyledP>{errorMessage}</StyledP>}
    </>
  );
};

InputQuantity.defaultProps = {
  errorMessage: '',
};

InputQuantity.propTypes = {
  handleForm: PropTypes.func.isRequired,
  preventProhibitedCharacters: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  quantity: PropTypes.any.isRequired,
};

export default InputQuantity;
