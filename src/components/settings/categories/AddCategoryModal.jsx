import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import db from '../../../fbase';
import Modal from '../../templates/Modal';
import TextHeader from '../../atoms/texts/TextHeader';
import Input from '../../atoms/formElements/Input';
import Label from '../../atoms/formElements/Label';
import Button from '../../atoms/buttons/Button';
import ButtonIconCancel from '../../atoms/buttons/ButtonIconCancel';

const InputVerticalWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

class AddCategoryModal extends React.Component {
  state = {
    categories: [],
    newCategory: '',
  };

  componentDidMount() {
    db.collection('categories')
      .doc('all')
      .get()
      .then(doc => this.setState({ categories: [...doc.data().categories] }));
  }

  handleForm = e => {
    console.log(e.target.value);
    console.log(e.target.id);

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

      this.closeModal();
    } else {
      console.log('NIC NIE WPISAŁEŚ!');
    }
  };

  closeModal = () => {
    const { toggleAddCategoryModal } = this.props;
    toggleAddCategoryModal();
  };

  render() {
    const { toggleAddCategoryModal } = this.props;
    const { newCategory } = this.state;

    return (
      <Modal>
        <TextHeader>Dodaj Kategorię</TextHeader>
        <br />
        <InputVerticalWrapper>
          <Label htmlFor="newCategory">Nazwa:</Label>
          <Input id="newCategory" type="text" onChange={this.handleForm} value={newCategory} />
        </InputVerticalWrapper>
        <Button
          type="button"
          onClick={() => {
            this.handleAddCategory();
          }}
        >
          Dodaj
        </Button>
        <br />
        <ButtonIconCancel onClick={toggleAddCategoryModal} />
      </Modal>
    );
  }
}

AddCategoryModal.propTypes = {
  toggleAddCategoryModal: PropTypes.func.isRequired,
};

export default AddCategoryModal;
