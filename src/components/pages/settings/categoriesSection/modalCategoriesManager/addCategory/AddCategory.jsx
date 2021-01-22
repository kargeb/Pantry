import React from 'react';
import PropTypes from 'prop-types';
import H1 from '../../../../../styled/typography/H1';
import StyledProductInput from '../../../../../styled/formElements/inputs/StyledProductInput';
// import Button from '../../../../styledComponents/buttons/Button';
import Button from '../../../../../styled/buttons/Button';

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
    {errorMessage && <p>{errorMessage}</p>}
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
