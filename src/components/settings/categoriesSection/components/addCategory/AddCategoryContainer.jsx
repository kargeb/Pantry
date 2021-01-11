import React from 'react';
import { addCategoryToDatabase } from '../../../../../data/handlers';
import AddCategory from './AddCategory';

class AddCategoryContainer extends React.Component {
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
      <AddCategory
        handleForm={this.handleForm}
        handleAddCategory={this.handleAddCategory}
        alertMessage={alertMessage}
        newCategory={newCategory}
      />
    );
  }
}

export default AddCategoryContainer;
