import React from 'react';
import PropTypes from 'prop-types';
import { CategoriesContext } from '../../../context';

import db from '../../../fbase';
import Modal from '../../templates/Modal';
import ButtonIconCancel from '../../atoms/buttons/ButtonIconCancel';
import Divider from '../../atoms/divider/Divider';

import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory';

class CategoriesModal extends React.Component {
  state = {
    categories: [],
    newCategory: '',
    alertMessage: '',
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

  render() {
    const categoriesContext = {
      ...this.state,
      handleForm: this.handleForm,
      handleAddCategory: this.handleAddCategory,
    };

    const { toggleCategoriesModal } = this.props;
    const { categories } = this.state;
    return (
      <Modal>
        <CategoriesContext.Provider value={categoriesContext}>
          <AddCategory categories={categories} />
          <br />
          <Divider categories />
          <DeleteCategory categories={categories} />
          <br />
          <ButtonIconCancel onClick={toggleCategoriesModal} />
        </CategoriesContext.Provider>
      </Modal>
    );
  }
}

CategoriesModal.propTypes = {
  toggleCategoriesModal: PropTypes.func.isRequired,
};

export default CategoriesModal;
