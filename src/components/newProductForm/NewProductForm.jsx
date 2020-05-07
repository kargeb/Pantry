import React from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import db from '../../fbase';
import Modal from '../templates/Modal';
import ButtonConfirm from '../buttons/ButtonConfirm';
import ButtonCancel from '../buttons/ButtonCancel';

const Header = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-size: 13px;
  color: black;
`;

const InputLong = styled.input`
  width: 155px;
  height: 27px;
  padding-left: 5px;
  margin-bottom: 15px;
  border: solid 1px #ada17e;
  border-radius: 8px;
  outline: none;

  :focus {
    border: solid 1.5px rgba(251, 142, 1, 0.7);
    box-shadow: 0px 0px 2px #ffc52f;
  }
`;

const InputShort = styled(InputLong)`
  margin-left: 10px;
  width: 45px;
  text-align: center;
`;

const SelectLong = styled.select`
  width: 155px;
  height: 27px;
  margin-bottom: 20px;
  border: solid 1px #ada17e;
  border-radius: 8px;
  outline: none;

  :focus {
    border: solid 1.5px rgba(251, 142, 1, 0.7);
    box-shadow: 0px 0px 2px #ffc52f;
  }
`;

const SelectShort = styled(SelectLong)`
  margin-left: 10px;
  width: 45px;
`;

const InputVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputHorizontalWrapper = styled.div`
  display: flex;
  min-width: 90px;
  flex: 1;

  align-items: center;
  justify-content: space-between;
  align-items: baseline;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  margin-top: 20px;
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
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = () => {
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
        <Header>Nowy produkt</Header>
        <InputVerticalWrapper>
          <Label htmlFor="name">Nazwa</Label>
          <InputLong
            id="name"
            type="text"
            onChange={this.handleForm}
            value={name}
          />
        </InputVerticalWrapper>
        <InputVerticalWrapper>
          <Label htmlFor="category"> Kategoria:</Label>
          <SelectLong id="category" onChange={this.handleForm} value={category}>
            <option value="" disabled hidden />
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </SelectLong>
        </InputVerticalWrapper>
        <InputHorizontalWrapper>
          <Label htmlFor="unit"> Typ</Label>
          <SelectShort id="unit" onChange={this.handleForm} value={unit}>
            <option value="szt">szt</option>
            <option value="l">l</option>
            <option value="kg">kg</option>
          </SelectShort>
        </InputHorizontalWrapper>
        <InputHorizontalWrapper>
          <Label htmlFor="min"> Min</Label>
          <InputShort
            short
            id="min"
            type="number"
            placeholder="minimalna ilość"
            onChange={this.handleForm}
            value={min}
          />
        </InputHorizontalWrapper>
        <InputHorizontalWrapper>
          <Label htmlFor="quantity">Ilość</Label>
          <InputShort
            id="quantity"
            type="number"
            onChange={this.handleForm}
            value={quantity}
          />
        </InputHorizontalWrapper>
        <StyledButtonsWrapper>
          <ButtonCancel type="button" onClick={toggleFormVisibility} />
          <ButtonConfirm type="button" onClick={this.handleSubmit} />
        </StyledButtonsWrapper>
      </Modal>
    );
  }
}

export default NewProductForm;
