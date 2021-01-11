import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../templates/Modal';
import ButtonIconCancel from '../../../atoms/buttons/ButtonIconCancel';
import Divider from '../../../atoms/divider/Divider';
import { AppContext } from '../../../../context';
import AddCategoryContainer from './addCategory/AddCategoryContainer';
import DeleteCategoryContainer from './deleteCategory/DeleteCategoryContainer';

const ModalCategoriesManager = ({ toggleCategoriesContainer }) => (
  <AppContext.Consumer>
    {({ products, allCategories }) => (
      <Modal>
        <AddCategoryContainer allCategories={allCategories} />
        <br />
        <Divider horizontal />
        <DeleteCategoryContainer products={products} allCategories={allCategories} />
        <br />
        <ButtonIconCancel onClick={toggleCategoriesContainer} />
      </Modal>
    )}
  </AppContext.Consumer>
);

ModalCategoriesManager.propTypes = {
  toggleCategoriesContainer: PropTypes.func.isRequired,
};

export default ModalCategoriesManager;
