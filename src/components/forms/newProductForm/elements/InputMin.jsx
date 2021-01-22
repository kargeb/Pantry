import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledProductLabel from '../../../styledComponents/formElements/labels/StyledProductLabel';
import StyledProductInput from '../../../styledComponents/formElements/inputs/StyledProductInput';
import P from '../../../styledComponents/typography/StyledP';

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

const InputMin = ({
  handleForm,
  min,
  preventProhibitedCharacters,
  errorMessage,
}) => {
  return (
    <>
      <InputHorizontalWrapper>
        {console.log('ERRORS Z INPUT MIN:', errorMessage)}
        <StyledProductLabel htmlFor="min">Min</StyledProductLabel>
        <StyledProductInput
          short
          id="min"
          type="number"
          onKeyDown={preventProhibitedCharacters}
          onChange={handleForm}
          value={min}
          min="0"
        />
        {console.log('ERRORS MIN:', errorMessage)}
      </InputHorizontalWrapper>
      {errorMessage && <StyledP>{errorMessage}</StyledP>}
    </>
  );
};

InputMin.defaultProps = {
  errorMessage: '',
};

InputMin.propTypes = {
  handleForm: PropTypes.func.isRequired,
  preventProhibitedCharacters: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  min: PropTypes.any.isRequired,
};

export default InputMin;
