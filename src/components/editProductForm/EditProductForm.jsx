import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import db from '../../fbase';
import Modal from '../templates/ModalTemplate';

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

class EditProductForm extends React.Component {
  constructor(props) {
    super(props);

    const { name, quantity, category, min, unit, id } = this.props;

    this.state = {
      categories: [],
      category,
      name,
      quantity,
      min,
      unit,
      id,
    };
  }

  // state = {...this.props}
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

    const { name, quantity, category, min, unit, id } = this.state;
    const { toggleEditProductForm } = this.props;

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

      toggleEditProductForm();
    } else {
      console.log('WYPEŁNIJ  SZYSTKIE POLA');
    }
  };

  render() {
    const { toggleEditProductForm } = this.props;
    const { name, quantity, unit, min, category, categories } = this.state;

    return (
      <Modal>
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

          <StyledButton type="button" onClick={toggleEditProductForm}>
            <StyledCancelIcon icon={faTimesCircle} />
          </StyledButton>
        </StyledButtonsWrapper>
      </Modal>
    );
  }
}

export default EditProductForm;
