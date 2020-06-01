import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import db from '../../fbase';
import Modal from '../templates/TemplateModal';
import TextHeader from '../atoms/texts/TextHeader';
import Label from '../atoms/formElements/Label';
import Input from '../atoms/formElements/Input';
import Select from '../atoms/formElements/Select';
import WrapperButtonsConfirmAndCancel from '../molecules/WrapperButtonsConfirmAndCancel';

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

const AlertEmptyFields = styled.div`
  position: absolute;
  bottom: -25px;
  left: calc(50% - 75px);
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background-color: #814d0b;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
`;

class ProductPropertiesForm extends React.Component {
  constructor(props) {
    super(props);

    const { category, name, quantity, min, unit } = this.props;
    let { id } = this.props;
    if (!id) {
      id = uuidv4();
    }
    this.state = {
      isEmptyFieldsAlertVisible: false,
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
    console.log('ID obecne: ', this.state.id);

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
    const { toggleFormVisibility, toggleChangeQuantityModal } = this.props;

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

      toggleChangeQuantityModal();
      toggleFormVisibility();
    } else {
      this.setState({ isEmptyFieldsAlertVisible: true });
      console.log('WYPEŁNIJ  SZYSTKIE POLA');
    }
  };

  render() {
    const { toggleFormVisibility } = this.props;
    const {
      name,
      quantity,
      unit,
      min,
      category,
      categories,
      isEmptyFieldsAlertVisible,
    } = this.state;

    return (
      <Modal>
        <TextHeader marginBottom>Nowy produkt</TextHeader>
        <InputVerticalWrapper>
          <Label htmlFor="name">Nazwa</Label>
          <Input
            id="name"
            type="text"
            onChange={this.handleForm}
            value={name}
          />
        </InputVerticalWrapper>
        <InputVerticalWrapper>
          <Label htmlFor="category">Kategoria</Label>
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
          <Label htmlFor="unit">Typ</Label>
          <Select short id="unit" onChange={this.handleForm} value={unit}>
            <option value="szt">szt</option>
            <option value="l">l</option>
            <option value="kg">kg</option>
          </Select>
        </InputHorizontalWrapper>
        <InputHorizontalWrapper>
          <Label htmlFor="min">Min</Label>
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
          <Label htmlFor="quantity">Ilość</Label>
          <Input
            short
            id="quantity"
            type="number"
            onChange={this.handleForm}
            value={quantity}
          />
        </InputHorizontalWrapper>
        <WrapperButtonsConfirmAndCancel
          cancelOnClick={toggleFormVisibility}
          confirmOnClick={this.handleSubmit}
        />
        {isEmptyFieldsAlertVisible && (
          <AlertEmptyFields>Są puste pola!</AlertEmptyFields>
        )}
      </Modal>
    );
  }
}

ProductPropertiesForm.defaultProps = {
  toggleChangeQuantityModal: () => {},
  categories: [],
  name: '',
  quantity: '',
  category: '',
  min: '5',
  unit: 'szt',
  id: null,
};

export default ProductPropertiesForm;
