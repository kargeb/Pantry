import React from 'react';
import PropTypes from 'prop-types';
import { CategoriesContext } from '../../../../context';

import db from '../../../../fbase';
import Modal from '../../../templates/Modal';
import ButtonIconCancel from '../../../atoms/buttons/ButtonIconCancel';
import Divider from '../../../atoms/divider/Divider';
import Alert from '../../../molecules/Alert';

import AddCategory from '../categories/AddCategory';
import DeleteCategory from '../categories/DeleteCategory';

class CategoriesContainer extends React.Component {
  state = {
    categories: [],
    newCategory: '',
    categoryToDelete: '',
    alertMessage: '',
    isDeleteModalVisible: false,
  };

  componentDidMount() {
    this.unsubscribe = db
      .collection('categories')
      .doc('all')
      .onSnapshot(querySnapshot => {
        this.setState({ categories: querySnapshot.data().categories });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleAddCategory = () => {
    const { categories } = this.state;
    let { newCategory } = this.state;

    if (newCategory) {
      newCategory = newCategory[0].toUpperCase() + newCategory.slice(1);
      const newCategories = {
        categories: [...categories, newCategory],
      };
      db.collection('categories').doc('all').set(newCategories);

      this.setState({ newCategory: '', alertMessage: '' });
    } else {
      this.setState({ alertMessage: 'Wpisz nazwę!' });
    }
  };

  handleDeleteCategory = () => {
    const { categoryToDelete, categories } = this.state;

    if (categoryToDelete) {
      const categoriesWithoutDeletedOne = categories.filter(
        category => category !== categoryToDelete,
      );
      const newCategories = {
        categories: [...categoriesWithoutDeletedOne],
      };

      db.collection('categories').doc('all').set(newCategories);

      this.setState({ categoryToDelete: '', alertMessage: '' });
    } else {
      this.setState({ alertMessage: 'Wybierz kategorię!' });
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
    const categoriesContext = {
      ...this.state,
      handleForm: this.handleForm,
      handleAddCategory: this.handleAddCategory,
      handleDeleteCategory: this.handleDeleteCategory,
      setAlertMessage: this.setAlertMessage,
      toggleDeleteModal: this.toggleDeleteModal,
    };

    const { toggleCategoriesModal } = this.props;
    const { alertMessage } = this.state;
    return (
      <Modal>
        <CategoriesContext.Provider value={categoriesContext}>
          <AddCategory />
          <br />
          <Divider horizontal />
          <DeleteCategory />
          <br />
          <ButtonIconCancel onClick={toggleCategoriesModal} />
        </CategoriesContext.Provider>
        {alertMessage && <Alert>{alertMessage}</Alert>}
      </Modal>
    );
  }
}

CategoriesContainer.propTypes = {
  toggleCategoriesModal: PropTypes.func.isRequired,
};

export default CategoriesContainer;
