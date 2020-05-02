import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import db from '../../fbase';

const StyledForm = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  background-color: white;
`;

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
  background-color: white;
  box-shadow: 1px 0px 18px 4px rgba(0, 0, 0, 0.66);
`;

const StyledNameInput = styled.input`
  width: 150px;
`;

const StyledNumberInput = styled.input`
  width: 50px;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledConfirmIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: #01a39d;
`;

const StyledCancelIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: rgba(0, 0, 0, 0.54);
`;

const StyledLabel = styled.label`
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
`;

class EditCategoriesForm extends React.Component {
  state = {
    categories: [],
    newCategory: '',
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

  handleDeleteCategory = () => {
    const { categories, toDelete } = this.state;

    if (toDelete) {
      const categoriesWithoutDeletedOne = categories.filter(
        category => category !== toDelete,
      );

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
    const { toggleCategoryModal } = this.props;
    toggleCategoryModal();
  };

  render() {
    const { toggleCategoryModal } = this.props;
    const { newCategory, categories, toDelete } = this.state;

    return (
      <StyledWrapper>
        <StyledForm>
          <StyledLabel htmlFor="name">
            Dodaj kategorię:
            <StyledNameInput
              id="newCategory"
              placeholder="nazwa"
              type="text"
              onChange={this.handleForm}
              value={newCategory}
            />
          </StyledLabel>
          <button type="button" onClick={this.handleAddCategory}>
            Dodaj
          </button>

          <hr style={{ marginTop: 10, marginBottom: 10, width: '100%' }} />

          <StyledLabel htmlFor="category">
            Usuń kategorię:
            <select id="toDelete" onChange={this.handleForm} value={toDelete}>
              <option value="" disabled hidden />
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </StyledLabel>
          <button type="button" onClick={this.handleDeleteCategory}>
            Usuń
          </button>
          <br />
          <br />
          <StyledButton type="button" onClick={toggleCategoryModal}>
            <StyledCancelIcon icon={faTimesCircle} />
          </StyledButton>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default EditCategoriesForm;
/* 
<StyledButtonsWrapper>
<StyledButton type="button" onClick={this.handleAddCategory}>
<StyledConfirmIcon icon={faCheckSquare} />
</StyledButton>

<StyledButton type="button" onClick={toggleCategoryModal}>
              <StyledCancelIcon icon={faTimesCircle} />
              </StyledButton>
              </StyledButtonsWrapper>
*/
