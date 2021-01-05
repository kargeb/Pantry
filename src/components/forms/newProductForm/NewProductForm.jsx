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

class NewProductForm extends React.Component {
  state = {
    isAlertVisible: false,
    name: '',
    quantity: 0,
    category: '',
    min: 1,
    unit: 'item',
    id: uuidv4(),
  };

  // for type="number" Inputs
  preventProhibitedCharacters = e => {
    const prohibitedCharacters = ['e', '-', '+', '.', ','];

    if (prohibitedCharacters.includes(e.key)) {
      e.preventDefault();
    }
  };

  resetState = () => {
    this.setState({
      name: '',
      quantity: 0,
      category: '',
      min: 1,
      unit: 'item',
      id: null,
    });
  };

  handleForm = e => {
    const { value, id } = e.target;

    this.setState({ [id]: value });
  };

  validateProductValues = product => {
    console.log('Object.values(product):', Object.entries(product));

    Object.entries(product).forEach(property => {
      switch (property[0]) {
        case 'name':
          console.log('jestem w property NAME!!');
          if (property[1].length === 0) {
            console.log('name NIE MOZE BYC PUSTE!!');
          }
          break;
        case 'unit':
          if (property[1].length === 0) {
            console.log('unit NIE MOZE BYC PUSTE!!');
          }
          break;
        case 'category':
          if (property[1].length === 0) {
            console.log('cetgory NIE MOZE BYC PUSTE!!');
          }
          break;
        case 'quantity':
          if (property[1].length === 0) {
            console.log('quantity NIE MOZE BYC PUSTE!!');
          }
          break;
        case 'min':
          if (property[1].length === 0) {
            console.log('min NIE MOZE BYC PUSTE!!');
          }
          break;
        default:
          console.log('DEFAULT CASE');
      }

      console.log(property[0], ' ', property[1]);

      // if (property[1].length === '' || property[1].length === undefined) {
      //   console.log('JEST PUSTE POLE W: ', property[0]);
      // }
    });

    // for (const property in product) {
    //   console.log('property in product: ', property, product[property]);
    // }
  };

  handleSubmit = () => {
    const { name, quantity, category, min, unit, id } = this.state;
    const { toggleFormVisibility } = this.props;

    // if (name && quantity >= 0 && category && min && unit) {
    if (true) {
      const newProduct = {
        name,
        quantity,
        category,
        min,
        unit,
      };

      this.validateProductValues(newProduct);
      // const newProduct = {
      //   name: name.trim(),
      //   quantity: Number(quantity),
      //   category,
      //   min: Number(min),
      //   unit,
      //   onShoppingList: Number(quantity) < min,
      //   id,
      // };

      // addNewProductToDatabase(newProduct);

      // toggleFormVisibility();
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
        <InputMin
          handleForm={this.handleForm}
          min={min}
          preventProhibitedCharacters={this.preventProhibitedCharacters}
        />
        <InputQuantity
          handleForm={this.handleForm}
          preventProhibitedCharacters={this.preventProhibitedCharacters}
          quantity={quantity}
        />
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
