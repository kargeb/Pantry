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

class NewProductForm extends React.Component {
  state = {
    name: '',
    quantity: '',
    category: '',
    min: '3',
    unit: 'szt',
  };

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
        id: uuidv4(),
      };

      console.log('wypelnoine wszystkie, nowty produkt');
      console.log(newProduct);

      // this.props.addNewProduct(newProduct);
      db().collection('products').doc(newProduct.id).set(newProduct);

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
    const { categories, toggleFormVisibility } = this.props;
    const { name, quantity, unit, min, category } = this.state;

    return (
      <StyledWrapper>
        <StyledForm>
          <StyledLabel htmlFor="name">
            Nazwa:
            <StyledNameInput
              id="name"
              placeholder="nazwa"
              type="text"
              onChange={this.handleForm}
              value={name}
            />
          </StyledLabel>
          <StyledLabel htmlFor="quantity">
            Ilość:
            <StyledNumberInput
              id="quantity"
              placeholder="ilość"
              type="number"
              onChange={this.handleForm}
              value={quantity}
            />
          </StyledLabel>
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
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default NewProductForm;
