import React from 'react';
import styled from 'styled-components';
import H1 from '../../../atoms/texts/H1';
import Label from '../../../atoms/formElements/Label';
import Button from '../../../atoms/buttons/Button';

import ModalConfirmDeletion from '../../../molecules/ModalConfirmDeletion';
import withProductsAndCategories from '../../../../hoc/withProductsAndCategories';
import SelectCategory from './SelectCategory';

const StyledLabel = styled(Label)`
  width: 155px;
  /* color: ${({ theme }) => theme.grey60}; */
  text-align: center;
`;

const DeleteCategory = ({
  categoryToDelete,
  toggleDeleteModal,
  setAlertMessage,
  isDeleteModalVisible,
  handleDeleteCategory,
  NamesOfCategoriesContainingProducts,
  namesOfAllCategories,
  handleForm,
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
    <Button
      type="button"
      onClick={() =>
        categoryToDelete ? toggleDeleteModal() : setAlertMessage('Choose a category!')
      }
    >
      Remove
    </Button>
    {isDeleteModalVisible && (
      <ModalConfirmDeletion
        heading="Confirm deletion of:"
        name={categoryToDelete}
        toggleDeleteModal={toggleDeleteModal}
        handleDeleteCategory={handleDeleteCategory}
      />
    )}
  </>
);
export default withProductsAndCategories(DeleteCategory);
