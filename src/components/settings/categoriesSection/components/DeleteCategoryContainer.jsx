import React from 'react';
import styled from 'styled-components';
import H1 from '../../../atoms/texts/H1';
import Label from '../../../atoms/formElements/Label';
import Button from '../../../atoms/buttons/Button';
import db from '../../../../fbase';

import ModalConfirmDeletion from '../../../molecules/ModalConfirmDeletion';
import SelectCategory from './SelectCategory';
import Alert from '../../../molecules/Alert';

const StyledLabel = styled(Label)`
  width: 155px;
  /* color: ${({ theme }) => theme.grey60}; */
  text-align: center;
`;

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
    const { categoryToDelete, namesOfAllCategories } = this.state;

    if (categoryToDelete) {
      const categoriesWithoutDeletedOne = namesOfAllCategories.filter(
        category => category !== categoryToDelete,
      );
      const newCategories = {
        namesOfAllCategories: [...categoriesWithoutDeletedOne],
      };

      db.collection('categories').doc('all').set(newCategories);

      this.setState({ categoryToDelete: '', alertMessage: '' });
    } else {
      this.setState({ alertMessage: 'Choose a category!' });
    }
  };

  render() {
    const {
      alertMessage,
      isDeleteModalVisible,
      categoryToDelete,
      namesOfAllCategories,
      NamesOfCategoriesContainingProducts,
    } = this.state;

    return (
      <>
        <H1 marginBottom as="h2">
          Remove category:
        </H1>
        <StyledLabel>Only categories without products can be removed</StyledLabel>
        <SelectCategory
          categoryToDelete={categoryToDelete}
          handleForm={this.handleForm}
          namesOfAllCategories={namesOfAllCategories}
          NamesOfCategoriesContainingProducts={NamesOfCategoriesContainingProducts}
        />
        <Button
          type="button"
          onClick={() =>
            categoryToDelete ? this.toggleDeleteModal() : this.setAlertMessage('Choose a category!')
          }
        >
          Remove
        </Button>
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
