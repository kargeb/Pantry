import React from 'react';
import H1 from '../../../atoms/texts/H1';
import Input from '../../../atoms/formElements/Input';
import Button from '../../../atoms/buttons/Button';
import Alert from '../../../molecules/Alert';
import { addCategoryToDatabase } from '../../../../data/handlers';

class AddCategory extends React.Component {
  state = {
    newCategory: '',
    alertMessage: '',
  };

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  setAlertMessage = message => {
    this.setState({ alertMessage: message });
  };

  handleAddCategory = () => {
    const { allCategories } = this.props;
    const { newCategory } = this.state;

    if (newCategory) {
      const isCategoryUnique = !allCategories.includes(newCategory);
      if (isCategoryUnique) {
        const newCategories = {
          categories: [...allCategories, newCategory],
        };

        addCategoryToDatabase(newCategories);

        this.setState({ newCategory: '', alertMessage: '' });
      } else {
        console.log('Category already exist!');
        this.setState({ alertMessage: 'Category already exist!' });
      }
    } else {
      this.setState({ alertMessage: 'Enter a name!' });
    }
  };

  render() {
    const { alertMessage, newCategory } = this.state;
    return (
      <>
        <H1 marginBottom as="h2">
          Add category:
        </H1>
        <Input
          id="newCategory"
          type="text"
          onChange={this.handleForm}
          value={newCategory}
          placeholder="Name"
        />
        <Button type="button" onClick={this.handleAddCategory}>
          Add
        </Button>
        {alertMessage && <Alert>{alertMessage}</Alert>}
      </>
    );
  }
}

export default AddCategory;

// ({ handleForm, newCategory, handleAddCategory }) =>
