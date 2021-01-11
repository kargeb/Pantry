import React from 'react';
import styled from 'styled-components';
import H1 from '../../../../atoms/texts/H1';
import Label from '../../../../atoms/formElements/Label';
import Button from '../../../../atoms/buttons/Button';

import SelectCategory from './selectCategory/SelectCategory';

const StyledLabel = styled(Label)`
  width: 155px;
  /* color: ${({ theme }) => theme.grey60}; */
  text-align: center;
`;

const DeleteCategory = ({
  categoryToDelete,
  handleSubmit,
  NamesOfCategoriesContainingProducts,
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
      NamesOfCategoriesContainingProducts={NamesOfCategoriesContainingProducts}
    />
    {errorMessage && <p>{errorMessage}</p>}
    <Button type="button" onClick={() => handleSubmit()}>
      Remove
    </Button>
  </>
);
export default DeleteCategory;
