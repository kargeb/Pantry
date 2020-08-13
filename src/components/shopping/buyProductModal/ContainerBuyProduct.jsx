import React from 'react';
import PropTypes from 'prop-types';

import db from '../../../fbase';

import ModalBuyProduct from './ModalBuyProduct';

class ContainerBuyProduct extends React.Component {
  constructor(props) {
    super(props);

    const { id, toBuy, min, currentQuantity } = this.props;

    this.state = {
      min,
      currentQuantity,
      toBuy,
      id,
    };
  }

  addQuantity = () => {
    const { toBuy } = this.state;
    this.setState({ toBuy: toBuy + 1 });
  };

  subtractQuantity = () => {
    const { toBuy } = this.state;
    if (toBuy === 0) {
      return;
    }
    this.setState({ toBuy: toBuy - 1 });
  };

  handleInput = e => {
    let { value } = e.target;
    value = parseInt(value, 10);
    if (value < 0) {
      value = 0;
    }
    this.setState({ toBuy: value });
  };

  updateProductQuantity = toggleBuyProductModal => {
    const { currentQuantity, id, toBuy, min } = this.state;
    const quantityAfterShopping = +currentQuantity + +toBuy;

    db.collection('products')
      .doc(id)
      .update({
        quantity: quantityAfterShopping,
        onShoppingList: quantityAfterShopping < min,
      });
    toggleBuyProductModal();
  };

  render() {
    const { name, toggleBuyProductModal } = this.props;
    const { toBuy } = this.state;

    return (
      <ModalBuyProduct
        handleInput={this.handleInput}
        addQuantity={this.addQuantity}
        subtractQuantity={this.subtractQuantity}
        toBuy={toBuy}
        name={name}
        toggleBuyProductModal={toggleBuyProductModal}
        updateProductQuantity={this.updateProductQuantity}
      />
    );
  }
}

ContainerBuyProduct.propTypes = {
  name: PropTypes.string.isRequired,
  toggleBuyProductModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  toBuy: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired,
};

export default ContainerBuyProduct;
