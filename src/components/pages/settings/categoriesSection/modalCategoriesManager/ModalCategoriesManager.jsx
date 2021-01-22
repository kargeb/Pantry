import React from 'react';
import PropTypes from 'prop-types';
import StyledModal from '../../../../styled/modal/StyledModal';
import ButtonIconCancel from '../../../../styled/buttons/ButtonIconCancel';
import Divider from '../../../../styled/divider/Divider';
import { AppContext } from '../../../../../context';
import AddCategoryContainer from './addCategory/AddCategoryContainer';
import DeleteCategoryContainer from './deleteCategory/DeleteCategoryContainer';

const ModalCategoriesManager = ({ toggleCategoriesContainer }) => (
  <AppContext.Consumer>
    {({ products, allCategories }) => (
      <StyledModal>
        <AddCategoryContainer allCategories={allCategories} />
        <br />
        <Divider horizontal />
        <DeleteCategoryContainer
          products={products}
          allCategories={allCategories}
        />
        <br />
        <ButtonIconCancel onClick={toggleCategoriesContainer} />
      </StyledModal>
    )}
  </AppContext.Consumer>
);

ModalCategoriesManager.propTypes = {
  toggleCategoriesContainer: PropTypes.func.isRequired,
};

export default ModalCategoriesManager;
