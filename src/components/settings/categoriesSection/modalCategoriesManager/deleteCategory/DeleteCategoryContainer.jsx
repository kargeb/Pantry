import React from 'react';

import ModalConfirmDeletion from '../../../../molecules/ModalConfirmDeletion';
// import Alert from '../../../../molecules/Alert';
import { removeCategoryfromDatabase } from '../../../../../data/handlers';
import DeleteCategory from './DeleteCategory';

class DeleteCategoryContainer extends React.Component {
  state = {
    namesOfAllCategories: this.props.allCategories,
    categoriesWithProducts: [],
    categoryToDelete: '',
    // alertMessage: '',
    isConfirmationModalVisible: false,
    errorMessage: '',
  };

  componentDidMount() {
    const { products } = this.props;
    const categoriesWithProducts = this.pickCategoriesWithProducts(products);

    this.setState({ categoriesWithProducts });
  }

  toggleConfirmationModal = () => {
    this.setState(prevState => ({
      isConfirmationModalVisible: !prevState.isConfirmationModalVisible,
    }));
  };

  pickCategoriesWithProducts = products => {
    const categoriesWithProducts = [];

    products.forEach(product => {
      if (!categoriesWithProducts.includes(product.category)) {
        categoriesWithProducts.push(product.category);
      }
    });

    return categoriesWithProducts;
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
    const { categoryToDelete, categoriesWithProducts } = this.state;

    let categoryHasProducts = false;

    if (categoriesWithProducts.includes(categoryToDelete)) {
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
      categoriesWithProducts,
      errorMessage,
    } = this.state;

    return (
      <>
        <DeleteCategory
          handleSubmit={this.handleSubmit}
          categoriesWithProducts={categoriesWithProducts}
          namesOfAllCategories={this.props.allCategories}
          categoryToDelete={categoryToDelete}
          handleForm={this.handleForm}
          errorMessage={errorMessage}
        />
        {isConfirmationModalVisible && (
          <ModalConfirmDeletion
            heading="Confirm remove"
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
