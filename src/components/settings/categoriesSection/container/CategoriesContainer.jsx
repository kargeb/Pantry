import React from 'react';
import PropTypes from 'prop-types';
import { CategoriesContext } from '../../../../context';

import db from '../../../../fbase';
import Modal from '../../../templates/Modal';
import ButtonIconCancel from '../../../atoms/buttons/ButtonIconCancel';
import Divider from '../../../atoms/divider/Divider';
import Alert from '../../../molecules/Alert';

import AddCategory from '../components/AddCategory';
import DeleteCategory from '../components/DeleteCategory';

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
    const { newCategory } = this.state;

    if (newCategory) {
      const isCategoryUnique = !categories.includes(newCategory);
      if (isCategoryUnique) {
        const newCategories = {
          categories: [...categories, newCategory],
        };
        db.collection('categories').doc('all').set(newCategories);

        this.setState({ newCategory: '', alertMessage: '' });
      } else {
        this.setState({ alertMessage: 'Category already exist!' });
      }
    } else {
      this.setState({ alertMessage: 'Enter a name!' });
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
    const categoriesContext = {
      ...this.state,
      handleForm: this.handleForm,
      handleAddCategory: this.handleAddCategory,
      handleDeleteCategory: this.handleDeleteCategory,
      setAlertMessage: this.setAlertMessage,
      toggleDeleteModal: this.toggleDeleteModal,
    };

    const { toggleCategoriesContainer } = this.props;
    const { alertMessage } = this.state;
    return (
      <Modal>
        <CategoriesContext.Provider value={categoriesContext}>
          <AddCategory />
          <br />
          <Divider horizontal />
          <DeleteCategory />
          <br />
          <ButtonIconCancel onClick={toggleCategoriesContainer} />
        </CategoriesContext.Provider>
        {alertMessage && <Alert>{alertMessage}</Alert>}
      </Modal>
    );
  }
}

CategoriesContainer.propTypes = {
  toggleCategoriesContainer: PropTypes.func.isRequired,
};

export default CategoriesContainer;
