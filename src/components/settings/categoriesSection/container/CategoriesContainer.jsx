import React from 'react';
import PropTypes from 'prop-types';
import db from '../../../../fbase';
import Modal from '../../../templates/Modal';
import ButtonIconCancel from '../../../atoms/buttons/ButtonIconCancel';
import Divider from '../../../atoms/divider/Divider';
import Alert from '../../../molecules/Alert';

import AddCategory from '../components/AddCategory';
import DeleteCategory from '../components/DeleteCategory';

class CategoriesContainer extends React.Component {
  state = {
    namesOfAllCategories: this.props.allCategories,
    newCategory: '',
    NamesOfCategoriesContainingProducts: [],
    categoryToDelete: '',
    alertMessage: '',
    isDeleteModalVisible: false,
  };

  componentDidMount() {
    const { namesOfAllCategories } = this.state;
    const NamesOfCategoriesContainingProducts = this.SelectNamesOfCategoriesContainingProducts(
      namesOfAllCategories,
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

  handleAddCategory = () => {
    const { namesOfAllCategories } = this.state;
    const { newCategory } = this.state;

    if (newCategory) {
      const isCategoryUnique = !namesOfAllCategories.includes(newCategory);
      if (isCategoryUnique) {
        const newCategories = {
          namesOfAllCategories: [...namesOfAllCategories, newCategory],
        };

        console.log(`FROM CATEGORY MANAGER:
        namesOfAllCategories: ${namesOfAllCategories}
        newCategories: ${newCategories.namesOfAllCategories}
          `);

        // db.collection('categories').doc('all').set(newCategories);

        this.setState({ newCategory: '', alertMessage: '' });
      } else {
        this.setState({ alertMessage: 'Category already exist!' });
      }
    } else {
      this.setState({ alertMessage: 'Enter a name!' });
    }
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

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalVisible: !prevState.isDeleteModalVisible,
    }));
  };

  setAlertMessage = message => {
    this.setState({ alertMessage: message });
  };

  render() {
    const { toggleCategoriesContainer } = this.props;
    const {
      NamesOfCategoriesContainingProducts,
      namesOfAllCategories,
      alertMessage,
      newCategory,
      categoryToDelete,
      isDeleteModalVisible,
    } = this.state;
    return (
      <Modal>
        <AddCategory
          handleForm={this.handleForm}
          newCategory={newCategory}
          handleAddCategory={this.handleAddCategory}
        />
        <br />
        <Divider horizontal />
        <DeleteCategory
          NamesOfCategoriesContainingProducts={NamesOfCategoriesContainingProducts}
          categoryToDelete={categoryToDelete}
          isDeleteModalVisible={isDeleteModalVisible}
          handleDeleteCategory={this.handleDeleteCategory}
          setAlertMessage={this.setAlertMessage}
          toggleDeleteModal={this.toggleDeleteModal}
          namesOfAllCategories={namesOfAllCategories}
          handleForm={this.handleForm}
        />
        <br />
        <ButtonIconCancel onClick={toggleCategoriesContainer} />
        {alertMessage && <Alert>{alertMessage}</Alert>}
      </Modal>
    );
  }
}

CategoriesContainer.propTypes = {
  toggleCategoriesContainer: PropTypes.func.isRequired,
};

export default CategoriesContainer;
