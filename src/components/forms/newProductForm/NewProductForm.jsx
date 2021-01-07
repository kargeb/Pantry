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
    min: 1,
    name: '',
    quantity: 0,
    unit: 'item',
    category: '',
    id: uuidv4(),

    // errorsOld: {},
    errorMessages: {
      min: '',
      unit: '',
      name: '',
      quantity: '',
      category: '',
    },
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

  // validateProductValues = product => {
  //   console.log('Object.values(product):', Object.entries(product));
  //   this.setState({ errorsOld: [] });

  //   Object.entries(product).forEach(property => {
  //     const [name, value] = property;
  //     console.log('name, value', name, value);
  //     if (value.length === 0) {
  //       console.log('name NIE MOZE BYC PUSTE!!');
  //       this.setState(prevState => ({
  //         errorsOld: [...prevState.errorsOld, name],
  //       }));
  //     }
  //     console.log(name, ' ', value);
  //   });
  // };

  formHasEmptyFields = () => {
    const { name, quantity, category, min, unit } = this.state;
    let formHasEmptyFields = false;

    const currentErrorMessages = {
      min: '',
      unit: '',
      name: '',
      quantity: '',
      category: '',
    };

    const formFields = {
      min: String(min),
      name: name.trim(),
      unit: unit.trim(),
      category: category.trim(),
      quantity: String(quantity),
    };

    Object.entries(formFields).forEach(field => {
      const [key, value] = field;
      if (value.length === 0) {
        currentErrorMessages[key] = 'Nie moze byc puste!';
        formHasEmptyFields = true;
      }
    });

    this.setState({ errorMessages: currentErrorMessages });

    return formHasEmptyFields;
  };

  numberPropertiesArePositiveInteger = product => {
    const currentErrorMessages = {
      min: '',
      unit: '',
    };

    Object.entries(product).forEach(property => {
      const [key, value] = property;

      if (key == 'min' || key == 'quantity') {
        // console.log('Sprawdzamy KEY: i VALUE: ', key, ' ', value);
        if (Number.isInteger(value) && value >= 0) {
          // console.log('JEST OK!! ', key, ' ', value);
        } else {
          currentErrorMessages[key] = 'Incorrect number!';
        }
      }
    });

    this.setState({ errorMessages: currentErrorMessages });
  };

  handleSubmit = () => {
    const { name, quantity, category, min, unit, id } = this.state;
    const { toggleFormVisibility } = this.props;

    if (this.formHasEmptyFields()) {
      console.log('FORM HAS EMPTY FIELDS!');
      return;
    }

    console.log('FORM HAS NO EMPTY FIELDS');

    const newProduct = {
      name,
      quantity: Number(quantity),
      category,
      min: Number(min),
      unit,
      onShoppingList: Boolean(quantity < min),
      id,
    };

    if (this.numberPropertiesArePositiveInteger(newProduct)) {
      console.log('FORMULARZ OK:', newProduct);
    } else {
      console.log('Formularz nie jest ok!');
    }

    // this.validateProductValues(newProduct);

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

      errorMessages,
    } = this.state;

    return (
      <Modal>
        {console.log('error messages:', errorMessages)}
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

NewProductForm.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
};

export default NewProductForm;
