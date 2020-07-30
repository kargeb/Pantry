import React from 'react';
import db from '../../../fbase';
import H1 from '../../atoms/texts/H1';
import Alert from '../../molecules/Alert';
import Button from '../../atoms/buttons/Button';

import ModalConfirmDeletion from '../../molecules/ModalConfirmDeletion';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';
import SelectCategory from './SelectCategory';

class DeleteCategory extends React.Component {
  state = {
    categoryToDelete: '',
    alertMessage: '',
    isDeleteModalVisible: false,
  };

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleDeleteCategory = () => {
    const { categories } = this.props;
    const { categoryToDelete } = this.state;

    if (categoryToDelete) {
      const categoriesWithoutDeletedOne = categories.filter(
        category => category !== categoryToDelete,
      );
      const newCategories = {
        categories: [...categoriesWithoutDeletedOne],
      };

      db.collection('categories').doc('all').set(newCategories);

      this.setState({ categoryToDelete: '', alertMessage: '' });
    } else {
      this.setState({ alertMessage: 'Wybierz kategorię!' });
    }
  };

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalVisible: !prevState.isDeleteModalVisible,
    }));
  };

  setAlertMessage = message => {
    this.setState({ alertMessage: message });
  };

  render() {
    const { categories } = this.props;
    const { categoryToDelete, alertMessage, isDeleteModalVisible } = this.state;

    return (
      <>
        <H1 marginBottom as="h2">
          Usuń Kategorię
        </H1>
        <SelectCategory
          handleForm={this.handleForm}
          categoryToDelete={categoryToDelete}
          categories={categories}
        />
        <Button
          type="button"
          onClick={() =>
            categoryToDelete ? this.toggleDeleteModal() : this.setAlertMessage('Wybierz kategorię!')
          }
        >
          Usuń
        </Button>
        {alertMessage && <Alert>{alertMessage}</Alert>}
        {isDeleteModalVisible && (
          <ModalConfirmDeletion
            heading="Potwierdź usunięcie kategorii:"
            name={categoryToDelete}
            toggleDeleteModal={this.toggleDeleteModal}
            handleDeleteCategory={this.handleDeleteCategory}
          />
        )}
      </>
    );
  }
}

export default withProductsAndCategories(DeleteCategory);
