import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import db from '../../fbase';
import Modal from '../templates/Modal';
import H1 from '../atoms/texts/H1';
import Label from '../atoms/formElements/Label';
import Input from '../atoms/formElements/Input';
import Select from '../atoms/formElements/Select';
import Alert from '../molecules/Alert';
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

class ProductPropertiesForm extends React.Component {
  constructor(props) {
    super(props);

    const { category, name, quantity, min, unit } = this.props;
    let { id } = this.props;
    if (!id) {
      id = uuidv4();
    }
    this.state = {
      isAlertVisible: false,
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
    let { value } = e.target;
    if (value < 0) {
      value = 0;
    }

    this.setState({ [e.target.id]: value });
  };

  handleSubmit = () => {
    const { name, quantity, category, min, unit, id } = this.state;
    const { toggleFormVisibility, toggleChangeQuantityModal } = this.props;

    if (name && quantity >= 0 && category && min && unit) {
      const newProduct = {
        name,
        quantity: Number(quantity),
        category,
        min,
        unit,
        onShoppingList: Number(quantity) < min,
        id,
      };

      db.collection('products').doc(newProduct.id).set(newProduct);

      this.setState({
        name: '',
        quantity: 1,
        category: '',
        min: '1',
        unit: 'szt',
        id: null,
      });

      toggleChangeQuantityModal();
      toggleFormVisibility();
    } else {
      this.setState({ isAlertVisible: true });
    }
  };

  render() {
    const { toggleFormVisibility, id } = this.props;
    const { name, quantity, unit, min, category, categories, isAlertVisible } = this.state;

    return (
      <Modal>
        <H1 marginBottomDouble>{id ? 'Edytuj produkt' : 'Nowy produkt'}</H1>
        <InputVerticalWrapper>
          <Label htmlFor="name">Nazwa</Label>
          <Input id="name" type="text" onChange={this.handleForm} value={name} />
        </InputVerticalWrapper>
        <InputVerticalWrapper>
          <Label htmlFor="category">Kategoria</Label>
          <Select id="category" onChange={this.handleForm} value={category}>
            <option aria-label="disable option" value="" disabled hidden />
            {categories.map(categoryItem => (
              <option key={categoryItem} value={categoryItem}>
                {categoryItem}
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
          <Input short id="quantity" type="number" onChange={this.handleForm} value={quantity} />
        </InputHorizontalWrapper>
        <WrapperButtonsConfirmAndCancel
          cancelOnClick={toggleFormVisibility}
          confirmOnClick={this.handleSubmit}
        />
        {isAlertVisible && <Alert>Są puste pola!</Alert>}
      </Modal>
    );
  }
}

ProductPropertiesForm.defaultProps = {
  toggleChangeQuantityModal: () => {},
  // categories: [],
  name: '',
  quantity: 1,
  category: '',
  min: '5',
  unit: 'szt',
  id: null,
};

ProductPropertiesForm.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  toggleChangeQuantityModal: PropTypes.func,
  name: PropTypes.string,
  quantity: PropTypes.number,
  category: PropTypes.string,
  min: PropTypes.string,
  unit: PropTypes.string,
  id: PropTypes.string,
};

export default ProductPropertiesForm;
