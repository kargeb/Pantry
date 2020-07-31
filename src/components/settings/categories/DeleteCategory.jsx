import React from 'react';
import { CategoriesContext } from '../../../context';
import H1 from '../../atoms/texts/H1';
import Button from '../../atoms/buttons/Button';

import ModalConfirmDeletion from '../../molecules/ModalConfirmDeletion';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';
import SelectCategory from './SelectCategory';

const DeleteCategory = () => (
  <CategoriesContext.Consumer>
    {context => (
      <>
        <H1 marginBottom as="h2">
          Usuń Kategorię
        </H1>
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
