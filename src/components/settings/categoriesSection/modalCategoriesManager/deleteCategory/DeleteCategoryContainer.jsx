import React from 'react';

import ModalConfirmDeletion from '../../../../molecules/ModalConfirmDeletion';
import Alert from '../../../../molecules/Alert';
import { removeCategoryfromDatabase } from '../../../../../data/handlers';
import DeleteCategory from './DeleteCategory';

class DeleteCategoryContainer extends React.Component {
  state = {
    namesOfAllCategories: this.props.allCategories,
    NamesOfCategoriesContainingProducts: [],
    categoryToDelete: '',
    alertMessage: '',
    isConfirmationModalVisible: false,
    errorMessage: '',
  };

  componentDidMount() {
    const { products } = this.props;
    const NamesOfCategoriesContainingProducts = this.SelectNamesOfCategoriesContainingProducts(
      products,
    );

    this.setState({ NamesOfCategoriesContainingProducts });
  }

  toggleConfirmationModal = () => {
    this.setState(prevState => ({
      isConfirmationModalVisible: !prevState.isConfirmationModalVisible,
    }));
  };

  SelectNamesOfCategoriesContainingProducts = products => {
    const NamesOfCategoriesContainingProducts = [];

    products.forEach(product => {
      if (!NamesOfCategoriesContainingProducts.includes(product.category)) {
        NamesOfCategoriesContainingProducts.push(product.category);
      }
    });

    return NamesOfCategoriesContainingProducts;
  };

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = () => {
    if (this.noCategorySelected()) {
      return;
    }

    if (this.categoryContainsProducts()) {
      return;
    }

    this.toggleConfirmationModal();
  };

  setAlertMessage = message => {
    this.setState({ alertMessage: message });
  };

  noCategorySelected = () => {
    const { categoryToDelete } = this.state;

    let categoryIsNotSelected = false;

    if (categoryToDelete) {
      categoryIsNotSelected = false;
    } else {
      this.setState({ errorMessage: 'Select category!' });
      categoryIsNotSelected = true;
    }

    console.log('namesOfAllCategories: ', this.state.namesOfAllCategories);

    console.log('PREVENT TO DELETE LAST CATEGORY');

    return categoryIsNotSelected;
  };

  categoryContainsProducts = () => {
    const {
      categoryToDelete,
      NamesOfCategoriesContainingProducts,
    } = this.state;

    let categoryHasProducts = false;

    if (NamesOfCategoriesContainingProducts.includes(categoryToDelete)) {
      categoryHasProducts = true;
      this.setState({ errorMessage: "You can't remove this category" });
    } else {
      categoryHasProducts = false;
    }

    return categoryHasProducts;
  };

  handleDeleteCategory = () => {
    const { categoryToDelete } = this.state;

    removeCategoryfromDatabase(categoryToDelete);

    this.setState({
      categoryToDelete: '',
      errorMessage: '',
    });
  };

  render() {
    const {
      alertMessage,
      isConfirmationModalVisible,
      categoryToDelete,
      NamesOfCategoriesContainingProducts,
      errorMessage,
    } = this.state;

    return (
      <>
        <DeleteCategory
          setAlertMessage={this.setAlertMessage}
          handleSubmit={this.handleSubmit}
          NamesOfCategoriesContainingProducts={
            NamesOfCategoriesContainingProducts
          }
          namesOfAllCategories={this.props.allCategories}
          categoryToDelete={categoryToDelete}
          handleForm={this.handleForm}
          errorMessage={errorMessage}
        />
        {isConfirmationModalVisible && (
          <ModalConfirmDeletion
            heading="Confirm deletion of:"
            name={categoryToDelete}
            // toggleDeleteModal={this.toggleDeleteModal}
            toggleConfirmationModal={this.toggleConfirmationModal}
            handleDeleteCategory={this.handleDeleteCategory}
          />
        )}
        {alertMessage && <Alert>{alertMessage}</Alert>}
      </>
    );
  }
}
export default DeleteCategoryContainer;
