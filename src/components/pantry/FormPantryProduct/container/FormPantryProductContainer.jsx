import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import db from '../../../../fbase';
import FormPantryProduct from '../FormPantryProducts';

class FormPantryProductContainer extends React.Component {
  constructor(props) {
    super(props);

    const { category, name, quantity, min, unit } = this.props;
    let { id } = this.props;

    if (!id) {
      id = uuidv4();
    }

    this.state = {
      isAlertVisible: false,
      // categories: [],
      name,
      quantity,
      category,
      min,
      unit,
      id,
    };
  }

  // componentDidMount() {
  //   db.collection('categories')
  //     .doc('all')
  //     .get()
  //     .then(doc => this.setState({ categories: [...doc.data().categories] }));
  // }

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
  name: '',
  quantity: 1,
  category: '',
  min: 5,
  unit: 'szt',
  id: null,
};

FormPantryProductContainer.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  toggleChangeQuantityModal: PropTypes.func,
  name: PropTypes.string,
  quantity: PropTypes.number,
  category: PropTypes.string,
  min: PropTypes.number,
  unit: PropTypes.string,
  id: PropTypes.string,
};

export default FormPantryProductContainer;
