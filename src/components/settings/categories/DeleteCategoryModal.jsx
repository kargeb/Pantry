import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import db from '../../../fbase';
import Modal from '../../templates/Modal';
import TextHeader from '../../atoms/texts/TextHeader';
import Label from '../../atoms/formElements/Label';
import Button from '../../atoms/buttons/Button';
import ButtonIconCancel from '../../atoms/buttons/ButtonIconCancel';
import Select from '../../atoms/formElements/Select';

const InputVerticalWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CustomSelect = styled(Select)`
  height: 100px;
`;

class DeleteCategoryModal extends React.Component {
  state = {
    categories: [],
    toDelete: '',
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

  handleDeleteCategory = () => {
    const { categories, toDelete } = this.state;

    if (toDelete) {
      const categoriesWithoutDeletedOne = categories.filter(category => category !== toDelete);

      const newCategories = {
        categories: [...categoriesWithoutDeletedOne],
      };

      db.collection('categories').doc('all').set(newCategories);

      this.closeModal();
    } else {
      console.log('NIC NIE WYBRAŁES!');
    }
  };

  closeModal = () => {
    const { toggleDeleteCategoryModal } = this.props;
    toggleDeleteCategoryModal();
  };

  render() {
    const { toggleDeleteCategoryModal } = this.props;
    const { categories, toDelete } = this.state;

    return (
      <Modal>
        <InputVerticalWrapper>
          <TextHeader>Usuń Kategorię</TextHeader>
          <br />
          <Label htmlFor="toDelete">Wybierz kategorię:</Label>
          <CustomSelect id="toDelete" onChange={this.handleForm} value={toDelete}>
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
        <ButtonIconCancel onClick={toggleDeleteCategoryModal} />
      </Modal>
    );
  }
}

DeleteCategoryModal.propTypes = {
  toggleDeleteCategoryModal: PropTypes.func.isRequired,
};

export default DeleteCategoryModal;
