import React from 'react';
import PropTypes from 'prop-types';

import db from '../../../fbase';
import Modal from '../../templates/Modal';
import ButtonIconCancel from '../../atoms/buttons/ButtonIconCancel';
import Divider from '../../atoms/divider/Divider';

import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory';

class CategoriesModal extends React.Component {
  state = {
    categories: [],
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

  render() {
    const { toggleCategoriesModal } = this.props; // pantryCategories is from HOC
    const { categories } = this.state;
    return (
      <Modal>
        <AddCategory categories={categories} />
        <br />
        <Divider categories />
        <DeleteCategory categories={categories} />
        <br />
        <ButtonIconCancel onClick={toggleCategoriesModal} />
      </Modal>
    );
  }
}

CategoriesModal.propTypes = {
  toggleCategoriesModal: PropTypes.func.isRequired,
};

export default CategoriesModal;
