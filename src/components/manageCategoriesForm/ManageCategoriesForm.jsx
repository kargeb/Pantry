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

class ManageCategoriesForm extends React.Component {
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

    this.setState({ newCategory: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { newCategory } = this.state;
    const { toggleCategoryModal } = this.props;

    if (newCategory) {
      console.log('Nowa kategoria:');
      console.log(newCategory);

      //   db.collection('products').doc(newProduct.id).set(newProduct);

      this.setState({
        newCategory: '',
      });

      toggleCategoryModal();
    } else {
      console.log('NIC NIE WPISAŁEŚ!');
    }
  };

  render() {
    const { toggleCategoryModal } = this.props;
    const { newCategory, categories } = this.state;

    return (
      <StyledWrapper>
        <StyledForm>
          <StyledLabel htmlFor="name">
            Nowa kategoria:
            <StyledNameInput
              id="name"
              placeholder="nazwa"
              type="text"
              onChange={this.handleForm}
              value={newCategory}
            />
          </StyledLabel>

          {/* <StyledLabel htmlFor="category">
            Kategoria:
            <select id="category" onChange={this.handleForm} value={category}>
              <option value="" disabled hidden />
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </StyledLabel> */}
          <StyledButtonsWrapper>
            <StyledButton type="submit" onClick={this.handleSubmit}>
              <StyledConfirmIcon icon={faCheckSquare} />
            </StyledButton>

            <StyledButton type="button" onClick={toggleCategoryModal}>
              <StyledCancelIcon icon={faTimesCircle} />
            </StyledButton>
          </StyledButtonsWrapper>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default ManageCategoriesForm;
