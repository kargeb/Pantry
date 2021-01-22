import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DeleteProductModal from '../components/DeleteProductModal';
import StyledModal from '../../../../../../../styled/modal/StyledModal';
import H1 from '../../../../../../../styled/typography/H1';
import EditDeleteButtonsSection from '../components/EditDeleteButtonsSection';
import WrapperButtonsConfirmAndCancel from '../../../../../../../molecules/WrapperButtonsConfirmAndCancel';
import H2 from '../../../../../../../styled/typography/H2';
import ChangeQuantityInputAndButtons from '../../../../../../../molecules/ChangeQuantityInputAndButtons';
import NewProductForm from '../../../../../newProductWrapper/newProductForm/NewProductForm';
import { updateProductQuantityInDatabase } from '../../../../../../../../data/handlers';
import P from '../../../../../../../styled/typography/StyledP';

const StyledP = styled(P)`
  /* margin-top: -10px; */
  padding: 10px 0 0 0;
  font-weight: bold;
  color: #ff2e00;
`;

class FormChangeQuantityContainer extends React.Component {
  constructor(props) {
    super(props);
    const { quantity } = props.product;

    this.state = {
      quantity: quantity,
      isProductPropertiesForm: false,
      isDeleteModalVisible: false,
      errorMessage: '',
    };
  }

  // for Inputs type="number"
  preventProhibitedCharacters = e => {
    const prohibitedCharacters = ['e', '-', '+', '.', ','];

    if (prohibitedCharacters.includes(e.key)) {
      e.preventDefault();
    }
  };

  handleInput = e => {
    let { value } = e.target;

    if (value < 0) {
      value = 0;
    }
    this.setState({ quantity: value });
  };

  addQuantity = () => {
    const { quantity } = this.state;

    this.setState({ quantity: Number(quantity) + 1 });
  };

  subtractQuantity = () => {
    const { quantity } = this.state;
    if (quantity <= 0) {
      return;
    }
    this.setState({ quantity: Number(quantity) - 1 });
  };

  updateProductQuantity = () => {
    let { quantity } = this.state;
    const { toggleChangeQuantityModal, id, min } = this.props;

    if (String(quantity).trim().length === 0) {
      this.setState({ errorMessage: 'Can not be empty!' });
      return;
    } else {
      this.setState({ errorMessage: '' });
    }

    const onShoppingList = Boolean(quantity < min);
    quantity = Number(quantity);

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
    const {
      isDeleteModalVisible,
      isProductPropertiesForm,
      quantity,
      errorMessage,
    } = this.state;
    const { toggleChangeQuantityModal, product } = this.props;
    const { unit, category, id, name, min } = product;

    return (
      <StyledModal>
        <H1 marginBottom>{name}</H1>
        <H2 italic marginBottom>
          Change quantity
        </H2>
        <ChangeQuantityInputAndButtons
          preventProhibitedCharacters={this.preventProhibitedCharacters}
          quantity={quantity}
          handleInput={this.handleInput}
          subtractQuantity={this.subtractQuantity}
          addQuantity={this.addQuantity}
        />
        {errorMessage && <StyledP>{errorMessage}</StyledP>}
        <EditDeleteButtonsSection
          toggleEditProductForm={this.toggleEditProductForm}
          toggleDeleteModal={this.toggleDeleteModal}
        />
        <WrapperButtonsConfirmAndCancel
          cancelOnClick={toggleChangeQuantityModal}
          confirmOnClick={this.updateProductQuantity}
        />

        {isDeleteModalVisible && (
          <DeleteProductModal
            id={id}
            name={name}
            toggleDeleteModal={this.toggleDeleteModal}
          />
        )}

        {isProductPropertiesForm && (
          <NewProductForm
            id={id}
            // to be sure that quantity is from state, not from props
            quantity={this.state.quantity}
            unit={unit}
            name={name}
            min={min}
            category={category}
            toggleFormVisibility={this.toggleEditProductForm}
            toggleChangeQuantityModal={toggleChangeQuantityModal}
          />
        )}
      </StyledModal>
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
