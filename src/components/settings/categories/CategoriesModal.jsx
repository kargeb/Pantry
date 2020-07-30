import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import db from '../../../fbase';
import Modal from '../../templates/Modal';
import H1 from '../../atoms/texts/H1';
import Select from '../../atoms/formElements/Select';
import Button from '../../atoms/buttons/Button';
import ButtonIconCancel from '../../atoms/buttons/ButtonIconCancel';
import Divider from '../../atoms/divider/Divider';
import Input from '../../atoms/formElements/Input';
import Alert from '../../molecules/Alert';

import ConfirmDeleteModal from '../../molecules/ConfirmDeleteModal';

import withProductsAndCategories from '../../../hoc/withProductsAndCategories';

const InputVerticalWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CustomSelect = styled(Select)`
  font-size: 15px;
  height: 100px;
  padding: 2px;
`;

const Option = styled.option`
  &:hover {
    font-weight: 600;
  }

  &:disabled {
    background-color: #f1f1f1;
    cursor: not-allowed;

    &:hover {
      font-weight: 500;
    }
  }
`;

class CategoriesModal extends React.Component {
  state = {
    categories: [],
    toDelete: '',
    newCategory: '',
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
    const { categories, toDelete } = this.state;

    if (toDelete) {
      const categoriesWithoutDeletedOne = categories.filter(category => category !== toDelete);
      const newCategories = {
        categories: [...categoriesWithoutDeletedOne],
      };

      db.collection('categories').doc('all').set(newCategories);

      this.setState({ toDelete: '', alertMessage: '' });
    } else {
      this.setState({ alertMessage: 'Wybierz kategorię!' });
    }
  };

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalVisible: !prevState.isDeleteModalVisible,
    }));
  };

  render() {
    const { toggleCategoriesModal, pantryCategories } = this.props; // pantryCategories is from HOC
    const { categories, toDelete, newCategory, alertMessage, isDeleteModalVisible } = this.state;
    return (
      <Modal>
        <H1 marginBottom as="h2">
          Dodaj Kategorię
        </H1>
        <InputVerticalWrapper>
          <Input
            id="newCategory"
            type="text"
            onChange={this.handleForm}
            value={newCategory}
            placeholder="Nazwa"
          />
        </InputVerticalWrapper>
        <Button type="button" onClick={this.handleAddCategory}>
          Dodaj
        </Button>
        <br />
        <Divider categories />
        <H1 marginBottom as="h2">
          Usuń Kategorię
        </H1>
        <InputVerticalWrapper>
          <CustomSelect id="toDelete" onChange={this.handleForm} value={toDelete} size="5">
            <option aria-label="disable option" value="" disabled hidden />
            {categories.map(category => (
              <Option
                disabled={pantryCategories.includes(category)} // does the category contain products
                key={category}
                value={category}
              >
                {category}
              </Option>
            ))}
          </CustomSelect>
        </InputVerticalWrapper>
        <Button
          type="button"
          onClick={() =>
            toDelete
              ? this.toggleDeleteModal()
              : this.setState({ alertMessage: 'Wybierz kategorię!' })
          }
        >
          Usuń
        </Button>
        <br />
        <ButtonIconCancel onClick={toggleCategoriesModal} />

        {isDeleteModalVisible && (
          <ConfirmDeleteModal
            heading="Potwierdź usunięcie kategorii:"
            name={toDelete}
            toggleDeleteModal={this.toggleDeleteModal}
            handleDeleteCategory={this.handleDeleteCategory}
          />
        )}

        {alertMessage && <Alert>{alertMessage}</Alert>}
      </Modal>
    );
  }
}

CategoriesModal.propTypes = {
  toggleCategoriesModal: PropTypes.func.isRequired,
  pantryCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withProductsAndCategories(CategoriesModal);
