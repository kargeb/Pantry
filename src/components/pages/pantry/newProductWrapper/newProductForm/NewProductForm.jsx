import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import H1 from '../../../../styled/typography/H1';
import InputName from './formElements/InputName';
import SelectCategory from './formElements/SelectCategory';
import SelectUnit from './formElements/SelectUnit';
import InputMin from './formElements/InputMin';
import InputQuantity from './formElements/InputQuantity';
import WrapperButtonsConfirmAndCancel from '../../../../molecules/WrapperButtonsConfirmAndCancel';
import { addNewProductToDatabase } from '../../../../../data/handlers';
import {
  checkForEmptyValues,
  setErrorMessages,
  checkForNonPositiveIntegers,
} from '../../../../../helpers';

import StyledModalBody from '../../../../styled/modal/elements/StyledModalBody';
import StyledModalBackground from '../../../../styled/modal/elements/StyledModalBackground';

class NewProductForm extends React.Component {
  constructor(props) {
    super(props);
    // props for editing product
    const { min, name, quantity, unit, category } = props;

    this.state = {
      // initial values for new product are in defaultProps at the bottom
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

    this.closeFormModal();
  };

  formHasEmptyFields = () => {
    const { name, quantity, category, min, unit } = this.state;

    const emptyFieldsNames = checkForEmptyValues({
      name,
      quantity,
      category,
      min,
      unit,
    });

    if (emptyFieldsNames.length === 0) {
      return false;
    }

    const errorMessages = setErrorMessages(
      'Nie moze byc puste!',
      ...emptyFieldsNames,
    );

    this.setState({ errorMessages });

    return true;
  };

  numberPropertiesAreIncorrect = () => {
    const { quantity, min } = this.state;

    const nonPositiveIntegers = checkForNonPositiveIntegers({ quantity, min });
    if (nonPositiveIntegers.length === 0) {
      return false;
    }

    const errorMessages = setErrorMessages(
      'LICZBA MUSI BYC DODATNIA!',
      ...nonPositiveIntegers,
    );

    this.setState({ errorMessages });
    return true;
  };

  closeFormModal = () => {
    const { toggleFormVisibility, toggleChangeQuantityModal } = this.props;
    toggleFormVisibility();
    if (toggleChangeQuantityModal) {
      toggleChangeQuantityModal();
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
      <StyledModalBackground blurBackground>
        <StyledModalBody as="form">
          <H1 marginBottomDouble>
            {this.props.name ? 'Edit product' : 'New product'}
          </H1>
          <InputName
            handleForm={this.handleForm}
            name={name}
            errorMessage={errorMessages.name}
          />
          <SelectCategory
            handleForm={this.handleForm}
            category={category}
            errorMessage={errorMessages.category}
          />
          <SelectUnit
            handleForm={this.handleForm}
            unit={unit}
            errorMessage={errorMessages.unit}
          />
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
        </StyledModalBody>
      </StyledModalBackground>
    );
  }
}

NewProductForm.defaultProps = {
  min: 1,
  name: '',
  quantity: 0,
  unit: 'item',
  category: '',
  toggleChangeQuantityModal: () => {},
};

NewProductForm.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  toggleChangeQuantityModal: PropTypes.func,
  min: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  unit: PropTypes.string,
  category: PropTypes.string,
};

export default NewProductForm;
