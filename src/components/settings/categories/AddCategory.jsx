import React from 'react';
import styled from 'styled-components';
import db from '../../../fbase';
import H1 from '../../atoms/texts/H1';
import Input from '../../atoms/formElements/Input';
import Alert from '../../molecules/Alert';
import Button from '../../atoms/buttons/Button';

class AddCategory extends React.Component {
  state = {
    newCategory: '',
    alertMessage: '',
  };

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleAddCategory = () => {
    const { categories } = this.props;
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
    const { newCategory, alertMessage } = this.state;

    return (
      <>
        <H1 marginBottom as="h2">
          Dodaj Kategorię
        </H1>
        <Input
          id="newCategory"
          type="text"
          onChange={this.handleForm}
          value={newCategory}
          placeholder="Nazwa"
        />
        <Button type="button" onClick={this.handleAddCategory}>
          Dodaj
        </Button>

        {alertMessage && <Alert>{alertMessage}</Alert>}
      </>
    );
  }
}

export default AddCategory;
