import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1 from '../../../../styledComponents/typography/H1';
import StyledProductLabel from '../../../../styledComponents/formElements/labels/StyledProductLabel';
import Button from '../../../../styledComponents/buttons/Button';

import SelectCategory from './selectCategory/SelectCategory';

const StyledLabel = styled(StyledProductLabel)`
  width: 155px;
  /* color: ${({ theme }) => theme.grey60}; */
  text-align: center;
`;

const DeleteCategory = ({
  categoryToDelete,
  handleSubmit,
  categoriesWithProducts,
  namesOfAllCategories,
  handleForm,
  errorMessage,
}) => (
  <>
    <H1 marginBottom as="h2">
      Remove category:
    </H1>
    <StyledLabel>Only categories without products can be removed</StyledLabel>
    <SelectCategory
      categoryToDelete={categoryToDelete}
      handleForm={handleForm}
      namesOfAllCategories={namesOfAllCategories}
      categoriesWithProducts={categoriesWithProducts}
    />
    {errorMessage && <p>{errorMessage}</p>}
    <Button type="button" onClick={() => handleSubmit()}>
      Remove
    </Button>
  </>
);

DeleteCategory.propTypes = {
  categoryToDelete: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  namesOfAllCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleForm: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  categoriesWithProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DeleteCategory;
