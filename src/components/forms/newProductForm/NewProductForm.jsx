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
import { addNewProductToDatabase } from '../../../data/handlers';
import { checkForEmptyValues, setErrorMessages, checkForPositiveIntegers } from '../../../helpers';

class NewProductForm extends React.Component {
  constructor(props) {
    super(props);
    // props for edited product
    const { min, name, quantity, unit, category } = props;
    // initial values for new product are in defaultProps
    this.state = {
      min,
      name,
      quantity,
      unit,
      category,
      // conditional is here because of problem with uuidv4() in defaultProps
      id: props.id || uuidv4(),

      errorMessages: {
        min: '',
        unit: '',
        name: '',
        quantity: '',
        category: '',
      },
    };
  }

  // for Inputs type="number"
  preventProhibitedCharacters = e => {
    const prohibitedCharacters = ['e', '-', '+', '.', ','];

    if (prohibitedCharacters.includes(e.key)) {
      e.preventDefault();
    }
  };

  handleForm = e => {
    // all validation is in handleSubmit
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = () => {
    const { name, quantity, category, min, unit, id } = this.state;
    const { toggleFormVisibility } = this.props;

    if (this.formHasEmptyFields()) {
      return;
    }

    if (this.numberPropertiesAreIncorrect()) {
      return;
    }

    const newProduct = {
      name,
      quantity: Number(quantity),
      category,
      min: Number(min),
      unit,
      onShoppingList: Boolean(quantity < min),
      id,
    };

    addNewProductToDatabase(newProduct);
    toggleFormVisibility();
  };

  formHasEmptyFields = () => {
    const { name, quantity, category, min, unit } = this.state;

    const emptyFieldsNames = checkForEmptyValues({ name, quantity, category, min, unit });

    if (emptyFieldsNames.length === 0) {
      return false;
    }

    console.log('MAM YPUSTE POLA:', emptyFieldsNames);
    const errorMessages = setErrorMessages(emptyFieldsNames, 'Nie moze byc puste!');
    console.log('mamy error Messages takie:', errorMessages);

    this.setState({ errorMessages });

    return true;
  };

  // formHasEmptyFields = () => {
  //   const { name, quantity, category, min, unit } = this.state;
  //   let formHasEmptyFields = false;
  //   const currentErrorMessages = this.resetErrorMessages();

  //   const formFields = {
  //     min: String(min),
  //     name: name.trim(),
  //     unit: unit.trim(),
  //     category: category.trim(),
  //     quantity: String(quantity),
  //   };

  //   Object.entries(formFields).forEach(field => {
  //     const [key, value] = field;
  //     if (value.length === 0) {
  //       currentErrorMessages[key] = 'Nie moze byc puste!';
  //       formHasEmptyFields = true;
  //     }
  //   });

  //   this.setState({ errorMessages: currentErrorMessages });

  //   return formHasEmptyFields;
  // };

  numberPropertiesAreIncorrect = () => {
    const { quantity, min } = this.state;
    // let thereAreWrongProperties = false;
    // const currentErrorMessages = this.resetErrorMessages();

    const nonPositiveIntegers = checkForPositiveIntegers({ quantity, min });

    if (nonPositiveIntegers.length === 0) {
      return false;
    }

    console.log('MAMY ZLE LICZBY!:', nonPositiveIntegers);
    const errorMessages = setErrorMessages(nonPositiveIntegers, 'LICZBA MUSI BYC DODATNIA!');
    console.log('mamy error Messages takie:', errorMessages);

    this.setState({ errorMessages });

    return true;

    // Object.entries(product).forEach(property => {
    //   const [key, value] = property;

    //   if (key === 'min' || key === 'quantity') {
    //     if (!Number.isInteger(value) || value < 0) {
    //       currentErrorMessages[key] = 'Incorrect number!';
    //       thereAreWrongProperties = true;
    //     }
    //   }
    // });

    // this.setState({ errorMessages: currentErrorMessages });

    // return thereAreWrongProperties;
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

  resetErrorMessages = () => {
    const errorMessages = {
      min: '',
      unit: '',
      name: '',
      quantity: '',
      category: '',
    };
    return { ...errorMessages };
  };

  render() {
    const { toggleFormVisibility } = this.props;
    const { name, quantity, unit, min, category, errorMessages } = this.state;

    return (
      <Modal>
        <H1 marginBottomDouble>New product</H1>
        <InputName handleForm={this.handleForm} name={name} errorMessage={errorMessages.name} />
        <SelectCategory
          handleForm={this.handleForm}
          category={category}
          errorMessage={errorMessages.category}
        />
        <SelectUnit handleForm={this.handleForm} unit={unit} errorMessage={errorMessages.unit} />
        <InputMin
          handleForm={this.handleForm}
          min={min}
          preventProhibitedCharacters={this.preventProhibitedCharacters}
          errorMessage={errorMessages.min}
        />
        <InputQuantity
          handleForm={this.handleForm}
          preventProhibitedCharacters={this.preventProhibitedCharacters}
          quantity={quantity}
          errorMessage={errorMessages.quantity}
        />
        <WrapperButtonsConfirmAndCancel
          cancelOnClick={toggleFormVisibility}
          confirmOnClick={this.handleSubmit}
        />
      </Modal>
    );
  }
}

NewProductForm.defaultProps = {
  min: 1,
  name: '',
  quantity: 0,
  unit: 'item',
  category: '',
};

NewProductForm.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  min: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  unit: PropTypes.string,
  category: PropTypes.string,
};

export default NewProductForm;
