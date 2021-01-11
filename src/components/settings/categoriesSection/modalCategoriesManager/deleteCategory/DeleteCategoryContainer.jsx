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
    isDeleteModalVisible: false,
  };

  componentDidMount() {
    const { products } = this.props;
    const NamesOfCategoriesContainingProducts = this.SelectNamesOfCategoriesContainingProducts(
      products,
    );

    this.setState({ NamesOfCategoriesContainingProducts });
  }

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

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalVisible: !prevState.isDeleteModalVisible,
    }));
  };

  setAlertMessage = message => {
    this.setState({ alertMessage: message });
  };

  handleDeleteCategory = () => {
    const { categoryToDelete, NamesOfCategoriesContainingProducts } = this.state;

    if (categoryToDelete) {
      if (NamesOfCategoriesContainingProducts.includes(categoryToDelete)) {
        console.log('KATEGORIA MA PRODUKTY!!!!! NIE MOZNA USUNAC!!!');
      } else {
        console.log('usuwamy kategorie:', categoryToDelete);
        removeCategoryfromDatabase(categoryToDelete);

        this.setState({
          categoryToDelete: '',
          alertMessage: '',
        });
      }
    } else {
      this.setState({ alertMessage: 'Choose a category!' });
    }
  };

  render() {
    const {
      alertMessage,
      isDeleteModalVisible,
      categoryToDelete,
      NamesOfCategoriesContainingProducts,
    } = this.state;

    return (
      <>
        <DeleteCategory
          setAlertMessage={this.setAlertMessage}
          toggleDeleteModal={this.toggleDeleteModal}
          NamesOfCategoriesContainingProducts={NamesOfCategoriesContainingProducts}
          namesOfAllCategories={this.props.allCategories}
          categoryToDelete={categoryToDelete}
          handleForm={this.handleForm}
        />
        {isDeleteModalVisible && (
          <ModalConfirmDeletion
            heading="Confirm deletion of:"
            name={categoryToDelete}
            toggleDeleteModal={this.toggleDeleteModal}
            handleDeleteCategory={this.handleDeleteCategory}
          />
        )}
        {alertMessage && <Alert>{alertMessage}</Alert>}
      </>
    );
  }
}
export default DeleteCategoryContainer;
