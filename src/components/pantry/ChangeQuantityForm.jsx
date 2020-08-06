import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../templates/Modal';
import H1 from '../atoms/texts/H1';
import Label from '../atoms/formElements/Label';
import Input from '../atoms/formElements/Input';
import Button from '../atoms/buttons/Button';
import db from '../../fbase';
import DeleteProductModal from './DeleteProductModal';
import ProductPropertiesForm from './ProductPropertiesForm';
import WrapperButtonsConfirmAndCancel from '../molecules/WrapperButtonsConfirmAndCancel';
import ButtonQuantity from '../atoms/buttons/ButtonQuantity';

const InputNumber = styled(Input)`
  border: none;
  color: ${props => props.theme.textPrimary};
  text-align: center;
  width: 44px;
  height: 44px;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 34px;
  line-height: 44px;
`;

const WrapperChangeQuantity = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
`;

const WrapperEditDeleteButtons = styled.div`
  margin-top: 30px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class ChangeQuantityForm extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    const { quantity, name, id, min, category, unit } = product;
    this.state = {
      quantity: Number(quantity),
      name,
      id,
      min: Number(min),
      unit,
      category,
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
    const {
      quantity,
      id,
      name,
      category,
      min,
      unit,
      isDeleteModalVisible,
      isProductPropertiesForm,
    } = this.state;
    const { toggleChangeQuantityModal } = this.props;

    return (
      <Modal>
        <H1 marginBottom>{name}</H1>

        <Label htmlFor="currentQuantity">Zmień ilość</Label>
        <WrapperChangeQuantity>
          <ButtonQuantity onClick={this.subtractQuantity}>-</ButtonQuantity>

          <InputNumber
            short
            className="withoutSpinButtons"
            type="number"
            id="currentQuantity"
            value={quantity}
            onChange={this.handleInput}
          />
          <ButtonQuantity onClick={this.addQuantity}>+</ButtonQuantity>
        </WrapperChangeQuantity>
        <WrapperEditDeleteButtons>
          <Button
            type="button"
            onClick={() => {
              this.toggleEditProductForm();
            }}
          >
            Edytuj
          </Button>
          <Button type="button" onClick={this.toggleDeleteModal}>
            Usuń
          </Button>
        </WrapperEditDeleteButtons>
        <WrapperButtonsConfirmAndCancel
          cancelOnClick={toggleChangeQuantityModal}
          confirmOnClick={this.updateProductQuantity}
        />

        {isDeleteModalVisible && (
          <DeleteProductModal id={id} name={name} toggleDeleteModal={this.toggleDeleteModal} />
        )}

        {isProductPropertiesForm && (
          <ProductPropertiesForm
            id={id}
            name={name}
            quantity={quantity}
            unit={unit}
            min={min}
            category={category}
            toggleFormVisibility={this.toggleEditProductForm}
            toggleChangeQuantityModal={toggleChangeQuantityModal}
          />
        )}
      </Modal>
    );
  }
}

ChangeQuantityForm.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
  toggleChangeQuantityModal: PropTypes.func.isRequired,
};

export default ChangeQuantityForm;
