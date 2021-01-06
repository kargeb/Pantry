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
    errorsOld: {},
    errorMessages: {
      name: '',
      quantity: '',
      category: '',
      min: '',
      unit: '',
    },
    // errorMessage: '',
    invalidInputNames: [],
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
    this.setState({ errorsOld: [] });

    Object.entries(product).forEach(property => {
      const [name, value] = property;
      console.log('name, value', name, value);
      if (value.length === 0) {
        console.log('name NIE MOZE BYC PUSTE!!');
        this.setState(prevState => ({
          errorsOld: [...prevState.errorsOld, name],
        }));
      }
      console.log(name, ' ', value);
    });
  };

  formHasEmptyFields = () => {
    const { name, quantity, category, min, unit } = this.state;
    let formHasEmptyFields = false;
    const newErrors = {
      name: '',
      quantity: '',
      category: '',
      min: '',
      unit: '',
    };

    console.log('NEW ERRORS:', newErrors);

    const formFields = {
      name: name.trim(),
      quantity: String(quantity),
      category: category.trim(),
      min: String(min),
      unit: unit.trim(),
    };

    const formHasEmptyInputs = false;
    const invalidInputNames = [];

    Object.entries(formFields).forEach(field => {
      const [key, value] = field;
      console.log('key, value', key, value);
      if (value.length === 0) {
        console.log('name NIE MOZE BYC PUSTE!!');
        newErrors[key] = 'Nie moze byc puste!';
        formHasEmptyFields = true;
        invalidInputNames.push(key);
      }
      console.log(key, ' ', value);
    });

    console.log('INVALID INPUTS ZE SPRAWDZACZA:', invalidInputNames);

    console.log('NEW ERRORS PO SPRAWDZENIU:', newErrors);
    this.setState({ errorMessages: newErrors });

    if (invalidInputNames.length) {
      this.setState({ invalidInputNames });
    }

    return formHasEmptyFields;
  };

  // this.setState(prevState => ({
  //   errorsOld: [...prevState.errorsOld, key],
  // }));

  // }
  handleSubmit = () => {
    const { name, quantity, category, min, unit, id } = this.state;
    const { toggleFormVisibility } = this.props;

    if (this.formHasEmptyFields()) {
      // this.setState({ errorMessage: 'Pole nie może byc puste' });
      // console.log('SO PUSTE POLA W FORMIE, WYPELNIJ JESCZZE RAZ');
      console.log('FORM HAS EMPTY FIELDS!');
      return;
    }

    console.log('FORM HAS NOT EMPTY FIELDS');

    // if (true) {
    const newProduct = {
      name,
      quantity,
      category,
      min,
      unit,
    };

    this.validateProductValues(newProduct);

    // this.checkNoEmptyInputs()

    // this.thereAreEmptyInputs()
    // const newProduct = {
    //   name: name.trim(),
    //   quantity: Number(quantity),
    //   category,
    //   min: Number(min),
    //   unit,
    //   onShoppingList: Number(quantity) < min,
    //   id,
    // };

    // console.log('state errorsOld:', this.state.errorsOld);

    // addNewProductToDatabase(newProduct);

    // toggleFormVisibility();
    // } else {
    //   this.setState({ isAlertVisible: true });
    // }
  };

  render() {
    const { toggleFormVisibility } = this.props;
    const {
      name,
      quantity,
      unit,
      min,
      category,
      isAlertVisible,
      invalidInputNames,
      errorMessages,
    } = this.state;

    return (
      <Modal>
        <H1 marginBottomDouble>New product</H1>
        {console.log('state errorsOld:', this.state.invalidInputNames)}
        {/* {console.log('state invalidInputNames:', this.state.invalidInputNames)} */}
        {console.log('name:', name)}
        {console.log('error inclused name: ', invalidInputNames.includes('name'))}
        <InputName handleForm={this.handleForm} name={name} />
        {invalidInputNames.includes('name') && <p>Input can not be empty!</p>}
        <SelectCategory handleForm={this.handleForm} category={category} />
        {invalidInputNames.includes('category') && <p>Input can not be empty!</p>}
        <SelectUnit handleForm={this.handleForm} unit={unit} />
        {invalidInputNames.includes('unit') && <p>Input can not be empty!</p>}
        <InputMin
          handleForm={this.handleForm}
          min={min}
          preventProhibitedCharacters={this.preventProhibitedCharacters}
          errorMessage={errorMessages.min}
        />
        {/* {invalidInputNames.includes('min') && <p>Input can not be empty!</p>} */}
        <InputQuantity
          handleForm={this.handleForm}
          preventProhibitedCharacters={this.preventProhibitedCharacters}
          quantity={quantity}
        />
        {invalidInputNames.includes('quantity') && <p>Input can not be empty!</p>}
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
