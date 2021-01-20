import React from 'react';

import ModalConfirmDeletion from '../../../../molecules/ModalConfirmDeletion';
// import Alert from '../../../../molecules/Alert';
import { removeCategoryfromDatabase } from '../../../../../data/handlers';
import DeleteCategory from './DeleteCategory';

class DeleteCategoryContainer extends React.Component {
  state = {
    namesOfAllCategories: this.props.allCategories,
    NamesOfCategoriesContainingProducts: [],
    categoryToDelete: '',
    // alertMessage: '',
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
    if (this.onlyOneCategoryLeft()) {
      return;
    }

    this.toggleConfirmationModal();
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

    return categoryIsNotSelected;
  };

  onlyOneCategoryLeft = () => {
    if (this.props.allCategories.length === 1) {
      this.setState({ errorMessage: 'There must be at least one category' });
      return true;
    }
    return false;
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

  deleteCategory = () => {
    const { categoryToDelete } = this.state;

    removeCategoryfromDatabase(categoryToDelete);

    this.setState({
      categoryToDelete: '',
      errorMessage: '',
    });
  };

  render() {
    const {
      isConfirmationModalVisible,
      categoryToDelete,
      NamesOfCategoriesContainingProducts,
      errorMessage,
    } = this.state;

    return (
      <>
        <DeleteCategory
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
            toggleConfirmationModal={this.toggleConfirmationModal}
            deleteCategory={this.deleteCategory}
          />
        )}
      </>
    );
  }
}
export default DeleteCategoryContainer;
