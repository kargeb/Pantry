import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import db from '../../../../fbase';
import FormPantryProduct from '../components/FormPantryProducts';

class FormPantryProductContainer extends React.Component {
  state = {
    isAlertVisible: false,
    name: '',
    quantity: this.props.quantity,
    category: '',
    min: 5,
    unit: 'szt',
    id: uuidv4(),
  };

  componentDidMount() {
    const { id } = this.props;

    if (id) {
      db.collection('products')
        .doc(id)
        .get()
        .then(doc => this.setState({ ...doc.data() }));
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

      db.collection('products').doc(newProduct.id).set(newProduct);

      this.setState({
        name: '',
        quantity: 1,
        category: '',
        min: 1,
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

    return (
      <FormPantryProduct
        id={id}
        toggleFormVisibility={toggleFormVisibility}
        state={this.state}
        handleForm={this.handleForm}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

FormPantryProductContainer.defaultProps = {
  toggleChangeQuantityModal: () => {},
  quantity: 0,
  id: null,
};

FormPantryProductContainer.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  toggleChangeQuantityModal: PropTypes.func,
  quantity: PropTypes.number,
  id: PropTypes.string,
};

export default FormPantryProductContainer;
