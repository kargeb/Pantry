import React from 'react';
import PropTypes from 'prop-types';
import db from '../../../../fbase';
import DeleteProductModal from '../components/DeleteProductModal';
import FormPantryProductContainer from '../../FormPantryProduct/container/FormPantryProductContainer';
import FormChangeQuantity from '../components/FormChangeQuantity';

class FormChangeQuantityContainer extends React.Component {
  constructor(props) {
    super(props);
    const { name, quantity, id } = this.props;
    this.state = {
      quantity: Number(quantity),
      name,
      id,
      isProductPropertiesForm: false,
      isDeleteModalVisible: false,
    };
  }

  handleInput = e => {
    let { value } = e.target;
    value = parseInt(value, 10);
    if (value < 0) {
      value = 0;
    }
    this.setState({ quantity: value });
  };

  addQuantity = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  };

  subtractQuantity = () => {
    const { quantity } = this.state;
    if (quantity === 0) {
      return;
    }
    this.setState({ quantity: quantity - 1 });
  };

  updateProductQuantity = () => {
    const { quantity, id, min } = this.state;
    const { toggleChangeQuantityModal } = this.props;

    db.collection('products')
      .doc(id)
      .update({
        quantity,
        onShoppingList: quantity < min,
      });
    toggleChangeQuantityModal();
  };

  toggleEditProductForm = () => {
    this.setState(prevState => ({
      isProductPropertiesForm: !prevState.isProductPropertiesForm,
    }));
  };

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalVisible: !prevState.isDeleteModalVisible,
    }));
  };

  render() {
    const { quantity, id, name, isDeleteModalVisible, isProductPropertiesForm } = this.state;
    const { toggleChangeQuantityModal } = this.props;

    return (
      <>
        <FormChangeQuantity
          updateProductQuantity={this.updateProductQuantity}
          toggleChangeQuantityModal={toggleChangeQuantityModal}
          toggleDeleteModal={this.toggleDeleteModal}
          toggleEditProductForm={this.toggleEditProductForm}
          addQuantity={this.addQuantity}
          handleInput={this.handleInput}
          quantity={quantity}
          name={name}
          subtractQuantity={this.subtractQuantity}
        />
        {isDeleteModalVisible && (
          <DeleteProductModal id={id} name={name} toggleDeleteModal={this.toggleDeleteModal} />
        )}

        {isProductPropertiesForm && (
          <FormPantryProductContainer
            id={id}
            quantity={quantity}
            toggleFormVisibility={this.toggleEditProductForm}
            toggleChangeQuantityModal={toggleChangeQuantityModal}
          />
        )}
      </>
    );
  }
}

FormChangeQuantityContainer.propTypes = {
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

  toggleChangeQuantityModal: PropTypes.func.isRequired,
};

export default FormChangeQuantityContainer;
