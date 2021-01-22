import React from 'react';
import PropTypes from 'prop-types';

import { addCategoryToDatabase } from '../../../../../../data/handlers';
import AddCategory from './AddCategory';

class AddCategoryContainer extends React.Component {
  state = {
    newCategory: '',
    errorMessage: '',
  };

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  InputIsEmpty = () => {
    const { newCategory } = this.state;

    let emptyInput = null;

    if (newCategory.trim()) {
      emptyInput = false;
      this.setState({ errorMessage: '' });
    } else {
      this.setState({ errorMessage: 'Wpisz nazwę kategorii' });
      emptyInput = true;
    }

    return emptyInput;
  };

  categoryAlreadyExists = () => {
    const { newCategory } = this.state;
    const { allCategories } = this.props;

    const categoryExists = allCategories.includes(newCategory);

    if (categoryExists) {
      this.setState({ errorMessage: 'Taka kategoria juz istnieje' });
    } else {
      this.setState({ errorMessage: '' });
    }

    return categoryExists;
  };

  handleAddCategory = () => {
    const { newCategory } = this.state;

    if (this.InputIsEmpty()) {
      return;
    }

    if (this.categoryAlreadyExists()) {
      return;
    }

    addCategoryToDatabase(newCategory);

    this.setState({ newCategory: '' });
  };

  render() {
    const { errorMessage, newCategory } = this.state;
    return (
      <AddCategory
        handleForm={this.handleForm}
        handleAddCategory={this.handleAddCategory}
        newCategory={newCategory}
        errorMessage={errorMessage}
      />
    );
  }
}

AddCategoryContainer.propTypes = {
  allCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddCategoryContainer;
