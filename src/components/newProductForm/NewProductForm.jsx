import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import db from '../../fbase';
import Modal from '../templates/Modal';

const Header = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 13px;
  color: black;
`;

const Input = styled.input`
  width: 155px;
  height: 27px;
  border: solid 1px #ada17e;
  border-radius: 8px;
  margin-top: 3px;
  outline: none;

  :focus {
    border: solid 1.5px rgba(251, 142, 1, 0.7);
    box-shadow: 0px 0px 2px #ffc52f;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

class NewProductForm extends React.Component {
  state = {
    categories: [],
    name: '',
    quantity: '',
    category: '',
    min: '3',
    unit: 'szt',
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

  handleSubmit = e => {
    e.preventDefault();

    const { name, quantity, category, min, unit } = this.state;
    const { toggleFormVisibility } = this.props;

    if (name && quantity && category && min && unit) {
      const newProduct = {
        name,
        quantity,
        category,
        min,
        unit,
        onShoppingList: quantity < min,
        id: uuidv4(),
      };

      console.log('wypelnoine wszystkie, nowty produkt');
      console.log(newProduct);

      // this.props.addNewProduct(newProduct);
      db.collection('products').doc(newProduct.id).set(newProduct);

      this.setState({
        name: '',
        quantity: '',
        category: '',
        min: '1',
        unit: 'szt',
      });

      toggleFormVisibility();
    } else {
      console.log('WYPEŁNIJ  SZYSTKIE POLA');
    }
  };

  render() {
    const { toggleFormVisibility } = this.props;
    const { name, quantity, unit, min, category, categories } = this.state;

    return (
      <Modal>
        {/* <StyledWrapper>
        <StyledForm> */}
        <Header>Nowy produkt</Header>
        <InputWrapper>
          <Label htmlFor="name">Nazwa</Label>
          <Input
            id="name"
            // placeholder="nazwa"
            type="text"
            onChange={this.handleForm}
            value={name}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="quantity">Ilość:</Label>
          <Input
            id="quantity"
            // placeholder="ilość"
            type="number"
            onChange={this.handleForm}
            value={quantity}
          />
        </InputWrapper>
        <StyledLabel htmlFor="unit">
          Jednostka:
          <select id="unit" onChange={this.handleForm} value={unit}>
            <option value="szt">szt</option>
            <option value="l">l</option>
            <option value="kg">kg</option>
          </select>
        </StyledLabel>
        <StyledLabel htmlFor="min">
          Minimalna ilość:
          <StyledNumberInput
            id="min"
            type="number"
            placeholder="minimalna ilość"
            onChange={this.handleForm}
            value={min}
          />
        </StyledLabel>
        <StyledLabel htmlFor="category">
          Kategoria:
          <select id="category" onChange={this.handleForm} value={category}>
            <option value="" disabled hidden />
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </StyledLabel>
        <StyledButtonsWrapper>
          <StyledButton type="submit" onClick={this.handleSubmit}>
            <StyledConfirmIcon icon={faCheckSquare} />
          </StyledButton>

          <StyledButton type="button" onClick={toggleFormVisibility}>
            <StyledCancelIcon icon={faTimesCircle} />
          </StyledButton>
        </StyledButtonsWrapper>
        {/* </StyledForm>
      </StyledWrapper> */}
      </Modal>
    );
  }
}

export default NewProductForm;
