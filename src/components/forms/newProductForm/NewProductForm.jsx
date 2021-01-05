import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../templates/Modal';
import H1 from '../../atoms/texts/H1';
import InputName from '../../pantry/FormPantryProduct/components/InputName';
import SelectCategory from '../../pantry/FormPantryProduct/components/SelectCategory';
import SelectUnit from '../../pantry/FormPantryProduct/components/SelectUnit';
import InputMin from '../../pantry/FormPantryProduct/components/InputMin';
import InputQuantity from '../../pantry/FormPantryProduct/components/InputQuantity';
import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';
import Alert from '../../molecules/Alert';
import { addNewProductToDatabase } from '../../../data/handlers';

const isValuePositiveInteger = value => {
  console.log('VALUE: ', value);
  // /^\s*\d*\s*$/
  // const regex = RegExp(/^\s*\d*\s*$/);
  const regex = /^\s*\d*\s*$/;
  console.log('TEST VALUE: ', typeof value);
  console.log('tutaj wynik testu:', regex.test(value));
};

class NewProductForm extends React.Component {
  state = {
    isAlertVisible: false,
    name: '',
    quantity: '',
    category: '',
    min: 5,
    unit: 'item',
    id: uuidv4(),
  };

  handleForm = e => {
    const { value, id, type } = e.target;

    console.log('WYWOLALEM SIE!!!');

    // isValuePositiveInteger(value);
    // console.log('wypisz atrget czy jest type:', e.target.type);

    // if (type === 'number') {
    //   isValuePositiveInteger(value);
    // }
    // // if (id === 'min' || id === 'quantity') {
    // //   value = parseInt(value, 10);

    // // if (value > 10) {
    // //   // value = 0;
    // // } else {
    // // }
    // // }
    // this.setState({ [e.target.id]: value });
  };

  handleSubmit = () => {
    const { name, quantity, category, min, unit, id } = this.state;
    const { toggleFormVisibility } = this.props;

    if (name && quantity >= 0 && category && min && unit) {
      const newProduct = {
        name,
        quantity: Number(quantity),
        category,
        min: Number(min),
        unit,
        onShoppingList: Number(quantity) < min,
        id,
      };

      addNewProductToDatabase(newProduct);

      this.setState({
        name: '',
        quantity: 1,
        category: '',
        min: 1,
        unit: 'item',
        id: null,
      });

      toggleFormVisibility();
    } else {
      this.setState({ isAlertVisible: true });
    }
  };

  render() {
    const { toggleFormVisibility } = this.props;
    const { name, quantity, unit, min, category, isAlertVisible } = this.state;

    return (
      <Modal>
        <H1 marginBottomDouble>New product</H1>
        <InputName handleForm={this.handleForm} name={name} />
        <SelectCategory handleForm={this.handleForm} category={category} />
        <SelectUnit handleForm={this.handleForm} unit={unit} />
        <InputMin handleForm={this.handleForm} min={min} />
        <InputQuantity handleForm={this.handleForm} quantity={quantity} />
        <WrapperButtonsConfirmAndCancel
          cancelOnClick={toggleFormVisibility}
          confirmOnClick={this.handleSubmit}
        />
        {isAlertVisible && <Alert>There are empty fields!</Alert>}
      </Modal>
    );
  }
}

NewProductForm.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
};

export default NewProductForm;
