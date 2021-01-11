import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import db from '../../../../fbase';
import Modal from '../../../templates/Modal';
import H1 from '../../../atoms/texts/H1';
import InputName from '../components/InputName';
import SelectCategory from '../components/SelectCategory';
import SelectUnit from '../components/SelectUnit';
import InputMin from '../components/InputMin';
import InputQuantity from '../components/InputQuantity';
import WrapperButtonsConfirmAndCancel from '../../../molecules/WrapperButtonsConfirmAndCancel';
import Alert from '../../../molecules/Alert';
import { addNewProductToDatabase } from '../../../../data/handlers';

class FormPantryProductContainer extends React.Component {
  state = {
    isAlertVisible: false,
    name: '',
    quantity: this.props.quantity,
    category: this.props.category,
    min: 5,
    unit: 'item',
    id: uuidv4(),
  };

  componentDidMount() {
    const { id } = this.props;
    const { quantity } = this.state;

    if (id) {
      db.collection('products')
        .doc(id)
        .get()
        .then(doc => this.setState({ ...doc.data(), quantity }));
    }
  }

  handleForm = e => {
    let { value } = e.target;

    if (e.target.id === 'min' || e.target.id === 'quantity') {
      value = parseInt(value, 10);

      if (value < 0) {
        value = 0;
      }
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
        min: Number(min),
        unit,
        onShoppingList: Number(quantity) < min,
        id,
      };

      // db.collection('products').doc(newProduct.id).set(newProduct);
      addNewProductToDatabase(newProduct);

      this.setState({
        name: '',
        quantity: 1,
        category: '',
        min: 1,
        unit: 'item',
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
    const { name, quantity, unit, min, category, isAlertVisible } = this.state;

    return (
      <Modal>
        <H1 marginBottomDouble>{id ? 'Edit product' : 'New product'}</H1>
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

FormPantryProductContainer.defaultProps = {
  toggleChangeQuantityModal: () => {},
  quantity: 0,
  id: null,
  category: '',
};

FormPantryProductContainer.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  toggleChangeQuantityModal: PropTypes.func,
  quantity: PropTypes.number,
  id: PropTypes.string,
  category: PropTypes.string,
};

export default FormPantryProductContainer;
