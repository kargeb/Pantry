import React from 'react';
import styled from 'styled-components';

import db from '../../fbase';
import Modal from '../templates/ModalTemplate';
import TextHeader from '../atoms/texts/TextHeader';
import Input from '../atoms/formElements/Input';
import TextLabel from '../atoms/texts/TextLabel';
import Button from '../atoms/buttons/Button';
import ButtonCancel from '../atoms/buttons/ButtonCancel';

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
    let { categories, newCategory } = this.state;

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
    const { toggleCategoryModal } = this.props;
    toggleCategoryModal();
  };

  render() {
    const { toggleAddCategoryModal } = this.props;
    const { newCategory } = this.state;

    return (
      <Modal>
        <TextHeader>Dodaj Kategorię</TextHeader>
        <br />
        <InputVerticalWrapper>
          <TextLabel htmlFor="newCategory">Nazwa:</TextLabel>
          <Input
            id="newCategory"
            type="text"
            onChange={this.handleForm}
            value={newCategory}
          />
        </InputVerticalWrapper>
        <Button
          type="button"
          onClick={() => {
            this.handleAddCategory();
          }}
        >
          Dodaj
        </Button>
        <ButtonCancel onClick={toggleAddCategoryModal} />
      </Modal>
    );
  }
}

export default AddCategoryModal;
