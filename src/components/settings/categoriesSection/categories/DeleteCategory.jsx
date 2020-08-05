import React from 'react';
import styled from 'styled-components';
import { CategoriesContext } from '../../../../context';
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

const DeleteCategory = () => (
  <CategoriesContext.Consumer>
    {context => (
      <>
        <H1 marginBottom as="h2">
          Usuń Kategorię
        </H1>
        <StyledLabel>Można usunąć jedynie kategorie nie zawierające żadnych produktów</StyledLabel>
        <SelectCategory />
        <Button
          type="button"
          onClick={() =>
            context.categoryToDelete
              ? context.toggleDeleteModal()
              : context.setAlertMessage('Wybierz kategorię!')
          }
        >
          Usuń
        </Button>
        {context.isDeleteModalVisible && (
          <ModalConfirmDeletion
            heading="Potwierdź usunięcie kategorii:"
            name={context.categoryToDelete}
            toggleDeleteModal={context.toggleDeleteModal}
            handleDeleteCategory={context.handleDeleteCategory}
          />
        )}
      </>
    )}
  </CategoriesContext.Consumer>
);
export default withProductsAndCategories(DeleteCategory);
