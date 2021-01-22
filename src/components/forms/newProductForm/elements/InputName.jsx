import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledProductLabel from '../../../styledComponents/formElements/labels/StyledProductLabel';
import StyledProductInput from '../../../styledComponents/formElements/inputs/StyledProductInput';
import P from '../../../styledComponents/typography/StyledP';

const InputVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledP = styled(P)`
  margin-top: -10px;
  padding: 0 0 5px 0;
  color: ${props => props.theme.primary};
`;

const InputName = ({ handleForm, name, errorMessage }) => {
  return (
    <>
      <InputVerticalWrapper>
        <StyledProductLabel htmlFor="name">Name</StyledProductLabel>
        <StyledProductInput
          id="name"
          type="text"
          onChange={handleForm}
          value={name}
        />
      </InputVerticalWrapper>
      {errorMessage && <StyledP>{errorMessage}</StyledP>}
    </>
  );
};

InputName.defaultProps = {
  errorMessage: '',
};

InputName.propTypes = {
  handleForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default InputName;
