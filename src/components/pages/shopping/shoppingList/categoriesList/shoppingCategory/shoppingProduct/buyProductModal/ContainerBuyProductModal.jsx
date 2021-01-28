import React from 'react';
import PropTypes from 'prop-types';
import ModalBuyProduct from './BuyProductModal';
import { updateProductQuantityInDatabase } from '../../../../../../../../database/controller';

class ContainerBuyProduct extends React.Component {
  constructor(props) {
    super(props);

    const { id, toBuy, min, currentQuantity } = this.props;

    this.state = {
      min,
      currentQuantity,
      toBuy,
      id,
      errorMessage: '',
    };
  }

  addQuantity = () => {
    const { toBuy } = this.state;

    if (toBuy == 9999) {
      this.setState({ errorMessage: 'Max 4 digits' });
      return;
    } else {
      this.setState({ errorMessage: '' });
    }

    this.setState({ toBuy: Number(toBuy) + 1 });
  };

  subtractQuantity = () => {
    const { toBuy } = this.state;
    if (toBuy <= 0) {
      return;
    }
    this.setState({ toBuy: Number(toBuy) - 1 });
  };

  handleInput = e => {
    let { value } = e.target;
    // value = parseInt(value, 10);

    if (String(value).trim().length > 4) {
      this.setState({ errorMessage: 'Max 4 digits' });
      return;
    } else {
      this.setState({ errorMessage: '' });
    }

    if (value < 0) {
      value = 0;
    }
    this.setState({ toBuy: value });
  };

  updateProductQuantity = toggleBuyProductModal => {
    const { currentQuantity, id, toBuy, min } = this.state;

    if (String(toBuy).trim().length === 0) {
      this.setState({ errorMessage: 'Can not be empty!' });
      return;
    } else {
      this.setState({ errorMessage: '' });
    }

    const quantityAfterShopping = Number(currentQuantity) + Number(toBuy);

    const quantity = quantityAfterShopping;
    const onShoppingList = Boolean(quantityAfterShopping < min);

    updateProductQuantityInDatabase(quantity, onShoppingList, id);

    toggleBuyProductModal();
  };

  render() {
    const { name, toggleBuyProductModal } = this.props;
    const { toBuy, errorMessage } = this.state;

    return (
      <ModalBuyProduct
        errorMessage={errorMessage}
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
