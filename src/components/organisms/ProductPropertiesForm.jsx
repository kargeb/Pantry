import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import db from '../../fbase';
import Modal from '../templates/ModalTemplate';
import TextHeader from '../texts/TextHeader';
import TextLabel from '../texts/TextLabel';
import Input from '../atoms/formElements/Input';
import Select from '../atoms/formElements/Select';
import ConfirmAndCancelButtonsWrapper from '../molecules/ConfirmAndCancelButtonsWrapper';

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

class ProductPropertiesForm extends React.Component {
  constructor(props) {
    super(props);

    const { category, name, quantity, min, unit, id } = this.props;

    this.state = {
      categories: [],
      name,
      quantity,
      category,
      min,
      unit,
      id,
    };
  }

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
    const { name, quantity, category, min, unit, id } = this.state;
    const { toggleFormVisibility } = this.props;

    if (name && quantity && category && min && unit) {
      const newProduct = {
        name,
        quantity,
        category,
        min,
        unit,
        onShoppingList: quantity < min,
        id,
      };

      db.collection('products').doc(newProduct.id).set(newProduct);

      this.setState({
        name: '',
        quantity: '',
        category: '',
        min: '1',
        unit: 'szt',
        id: null,
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
        <TextHeader>Nowy produkt</TextHeader>
        <InputVerticalWrapper>
          <TextLabel htmlFor="name">Nazwa</TextLabel>
          <Input
            id="name"
            type="text"
            onChange={this.handleForm}
            value={name}
          />
        </InputVerticalWrapper>
        <InputVerticalWrapper>
          <TextLabel htmlFor="category">Kategoria</TextLabel>
          <Select id="category" onChange={this.handleForm} value={category}>
            <option aria-label="disable option" value="" disabled hidden />
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </InputVerticalWrapper>
        <InputHorizontalWrapper>
          <TextLabel htmlFor="unit">Typ</TextLabel>
          <Select short id="unit" onChange={this.handleForm} value={unit}>
            <option value="szt">szt</option>
            <option value="l">l</option>
            <option value="kg">kg</option>
          </Select>
        </InputHorizontalWrapper>
        <InputHorizontalWrapper>
          <TextLabel htmlFor="min">Min</TextLabel>
          <Input
            short
            id="min"
            type="number"
            placeholder="minimalna ilość"
            onChange={this.handleForm}
            value={min}
          />
        </InputHorizontalWrapper>
        <InputHorizontalWrapper>
          <TextLabel htmlFor="quantity">Ilość</TextLabel>
          <Input
            short
            id="quantity"
            type="number"
            onChange={this.handleForm}
            value={quantity}
          />
        </InputHorizontalWrapper>
        <ConfirmAndCancelButtonsWrapper
          cancelOnClick={toggleFormVisibility}
          confirmOnClick={this.handleSubmit}
        />
      </Modal>
    );
  }
}

ProductPropertiesForm.defaultProps = {
  categories: [],
  name: '',
  quantity: '',
  category: '',
  min: '5',
  unit: 'szt',
  id: uuidv4(),
};

export default ProductPropertiesForm;
