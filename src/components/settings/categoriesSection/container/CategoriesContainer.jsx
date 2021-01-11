import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../templates/Modal';
import ButtonIconCancel from '../../../atoms/buttons/ButtonIconCancel';
import Divider from '../../../atoms/divider/Divider';
import { AppContext } from '../../../../context';
import AddCategoryContainer from '../components/addCategory/AddCategoryContainer';
import DeleteCategoryContainer from '../components/DeleteCategoryContainer';

const CategoriesContainer = ({ toggleCategoriesContainer }) => (
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

CategoriesContainer.propTypes = {
  toggleCategoriesContainer: PropTypes.func.isRequired,
};

export default CategoriesContainer;
