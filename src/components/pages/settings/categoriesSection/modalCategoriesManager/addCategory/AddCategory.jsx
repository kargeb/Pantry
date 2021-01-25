import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1 from '../../../../../styled/typography/H1';
import StyledProductInput from '../../../../../styled/formElements/inputs/StyledProductInput';
// import Button from '../../../../styledComponents/buttons/Button';
import Button from '../../../../../styled/buttons/Button';
import P from '../../../../../styled/typography/StyledP';

const StyledP = styled(P)`
  margin-top: -15px;
  padding: 10px 0 10px 0;
  color: ${props => props.theme.primary};
`;

const AddCategory = ({
  handleAddCategory,
  errorMessage,
  newCategory,
  handleForm,
}) => (
  <>
    <H1 marginBottom as="h2">
      Add category:
    </H1>
    <StyledProductInput
      id="newCategory"
      type="text"
      onChange={handleForm}
      value={newCategory}
      placeholder="Name"
    />
    {errorMessage && <StyledP>{errorMessage}</StyledP>}
    <Button type="button" onClick={handleAddCategory}>
      Add
    </Button>
  </>
);

AddCategory.propTypes = {
  handleAddCategory: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  newCategory: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default AddCategory;
