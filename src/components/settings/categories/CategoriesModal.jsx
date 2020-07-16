import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import db from '../../../fbase';
import Modal from '../../templates/Modal';
import TextHeader from '../../atoms/texts/TextHeader';
import Label from '../../atoms/formElements/Label';
import Select from '../../atoms/formElements/Select';
import Button from '../../atoms/buttons/Button';
import ButtonIconCancel from '../../atoms/buttons/ButtonIconCancel';
import Divider from '../../atoms/divider/Divider';
import Input from '../../atoms/formElements/Input';

const InputVerticalWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CustomSelect = styled(Select)`
  height: 100px;
`;

class CategoriesModal extends React.Component {
  state = {
    categories: [],
    toDelete: '',
    newCategory: '',
  };

  componentDidMount() {
    // this.downloadCategories();
    this.unsubscribe = db
      .collection('categories')
      .doc('all')
      .onSnapshot(querySnapshot => {
        // const downloadedCategories = [];
        console.log('query snapshot', querySnapshot.data().categories);
        this.setState({ categories: querySnapshot.data().categories });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
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

      this.setState({ newCategory: '' });
    } else {
      console.log('NIC NIE WPISAŁEŚ!');
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

      this.setState({ toDelete: '' });
    } else {
      console.log('NIC NIE WYBRAŁES!');
    }
  };

  downloadCategories() {
    db.collection('categories')
      .doc('all')
      .get()
      .then(doc => this.setState({ categories: [...doc.data().categories] }));
  }

  render() {
    const { toggleCategoriesModal } = this.props;
    const { categories, toDelete, newCategory } = this.state;
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
        <Divider />
        <TextHeader>Usuń Kategorię</TextHeader>
        <InputVerticalWrapper>
          <br />
          <Label htmlFor="toDelete">Wybierz kategorię:</Label>
          <CustomSelect id="toDelete" onChange={this.handleForm} value={toDelete} size="5">
            <option aria-label="disable option" value="" disabled hidden />
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </CustomSelect>
        </InputVerticalWrapper>
        <Button
          type="button"
          onClick={() => {
            this.handleDeleteCategory();
          }}
        >
          Usuń
        </Button>
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
