import React from 'react';
import PropTypes from 'prop-types';
import DeleteProductModal from '../components/DeleteProductModal';
import Modal from '../../../templates/Modal';
import H1 from '../../../atoms/texts/H1';
import EditDeleteButtonsSection from '../components/EditDeleteButtonsSection';
import WrapperButtonsConfirmAndCancel from '../../../molecules/WrapperButtonsConfirmAndCancel';
import H2 from '../../../atoms/texts/H2';
import ChangeQuantityInputAndButtons from '../../../molecules/ChangeQuantityInputAndButtons';
import NewProductForm from '../../../forms/newProductForm/NewProductForm';
import { updateProductQuantityInDatabase } from '../../../../data/handlers';

class FormChangeQuantityContainer extends React.Component {
  constructor(props) {
    super(props);
    const { quantity } = this.props.product;
    this.state = {
      quantity: Number(quantity),
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
    const { quantity } = this.state;
    const { toggleChangeQuantityModal, id, min } = this.props;

    const onShoppingList = Boolean(quantity < min);

    updateProductQuantityInDatabase(quantity, onShoppingList, id);

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
    const { isDeleteModalVisible, isProductPropertiesForm, quantity } = this.state;
    const { toggleChangeQuantityModal } = this.props;
    const { unit, category, id, name } = this.props.product;

    return (
      <Modal>
        <H1 marginBottom>{name}</H1>
        <H2 italic marginBottom>
          Change quantity
        </H2>
        <ChangeQuantityInputAndButtons
          quantity={quantity}
          handleInput={this.handleInput}
          subtractQuantity={this.subtractQuantity}
          addQuantity={this.addQuantity}
        />
        <EditDeleteButtonsSection
          toggleEditProductForm={this.toggleEditProductForm}
          toggleDeleteModal={this.toggleDeleteModal}
        />
        <WrapperButtonsConfirmAndCancel
          cancelOnClick={toggleChangeQuantityModal}
          confirmOnClick={this.updateProductQuantity}
        />

        {isDeleteModalVisible && (
          <DeleteProductModal id={id} name={name} toggleDeleteModal={this.toggleDeleteModal} />
        )}

        {isProductPropertiesForm && (
          <NewProductForm
            id={id}
            quantity={this.state.quantity}
            unit={unit}
            name={name}
            category={category}
            toggleFormVisibility={this.toggleEditProductForm}
            toggleChangeQuantityModal={toggleChangeQuantityModal}
          />
        )}
      </Modal>
    );
  }
}

FormChangeQuantityContainer.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,

  toggleChangeQuantityModal: PropTypes.func.isRequired,
};

export default FormChangeQuantityContainer;
