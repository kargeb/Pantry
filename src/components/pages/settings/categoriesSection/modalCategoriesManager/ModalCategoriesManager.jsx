import React from 'react';
import PropTypes from 'prop-types';
import StyledModal from '../../../../styled/modal/StyledModal';
import ButtonIconCancel from '../../../../styled/buttons/ButtonIconCancel';
import Divider from '../../../../styled/divider/Divider';
import { AppContext } from '../../../../../context';
import AddCategoryContainer from './addCategory/AddCategoryContainer';
import DeleteCategory from './deleteCategory/DeleteCategory';

const ModalCategoriesManager = ({ toggleCategoriesContainer }) => (
  <AppContext.Consumer>
    {({ products, allCategories }) => (
      <StyledModal toggleModal={toggleCategoriesContainer}>
        <AddCategoryContainer allCategories={allCategories} />
        <br />
        <Divider horizontal />
        <DeleteCategory products={products} allCategories={allCategories} />
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
