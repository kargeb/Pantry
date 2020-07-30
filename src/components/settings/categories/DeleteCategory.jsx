import React from 'react';
import styled from 'styled-components';
import db from '../../../fbase';
import H1 from '../../atoms/texts/H1';
import Alert from '../../molecules/Alert';
import Button from '../../atoms/buttons/Button';

import ConfirmDeleteModal from '../../molecules/ConfirmDeleteModal';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';
import SelectCategory from './SelectCategory';

const InputVerticalWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

class DeleteCategory extends React.Component {
  state = {
    toDelete: '',
    alertMessage: '',
    isDeleteModalVisible: false,
  };

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleDeleteCategory = () => {
    const { categories } = this.props;
    const { toDelete } = this.state;

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

  setAlertMessage = message => {
    this.setState({ alertMessage: message });
  };

  render() {
    const { categories } = this.props;
    const { toDelete, alertMessage, isDeleteModalVisible } = this.state;

    return (
      <div>
        <H1 marginBottom as="h2">
          Usuń Kategorię
        </H1>
        <InputVerticalWrapper>
          <SelectCategory
            handleForm={this.handleForm}
            toDelete={toDelete}
            categories={categories}
          />
        </InputVerticalWrapper>
        <Button
          type="button"
          onClick={() =>
            toDelete ? this.toggleDeleteModal() : this.setAlertMessage('Wybierz kategorię!')
          }
        >
          Usuń
        </Button>
        {alertMessage && <Alert>{alertMessage}</Alert>}
        {isDeleteModalVisible && (
          <ConfirmDeleteModal
            heading="Potwierdź usunięcie kategorii:"
            name={toDelete}
            toggleDeleteModal={this.toggleDeleteModal}
            handleDeleteCategory={this.handleDeleteCategory}
          />
        )}
      </div>
    );
  }
}

export default withProductsAndCategories(DeleteCategory);
