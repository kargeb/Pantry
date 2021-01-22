import React from 'react';
import PropTypes from 'prop-types';
import StyledModal from '../../../../styledComponents/modal/StyledModal';
import ButtonIconCancel from '../../../../styledComponents/buttons/ButtonIconCancel';
import Divider from '../../../../styledComponents/divider/Divider';
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
