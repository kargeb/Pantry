import React from 'react';
import styled from 'styled-components';
import Modal from '../templates/ModalTemplate';
import TextHeader from '../atoms/texts/TextHeader';
import TextLabel from '../atoms/texts/TextLabel';
import Input from '../atoms/formElements/Input';
import Button from '../atoms/buttons/Button';
import db from '../../fbase';
import DeleteProductModal from '../deleteProduct/DeleteProductModal';
import ProductPropertiesForm from './ProductPropertiesForm';
import ConfirmAndCancelButtonsWrapper from '../molecules/ConfirmAndCancelButtonsWrapper';

const Header = styled(TextHeader)`
  margin-bottom: 15px;
`;

const ButtonQuantity = styled.button`
  font-family: inherit;
  width: 40px;
  height: 28px;
  line-height: 28px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid #8e5f23;
  border-radius: 4px;
  color: #8e5f23;
  font-size: 28px;
  font-weight: 500;
  /* letter-spacing: 1px; */
`;

const InputNumber = styled(Input)`
  text-align: center;
  width: 44px;
  height: 44px;
  padding: 0;
  margin: 0;
  color: black;
  font-size: 28px;
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
    const { quantity, name, id, min, category, unit } = this.props.product;
    this.state = {
      quantity: Number(quantity),
      name,
      id,
      min,
      unit,
      category,
      isEditModalVisible: false,
      isDeleteModalVisibile: false,
    };
  }

  handleInput = e => {
    console.log(e.target.value);
    console.log(e.target.id);

    this.setState({ quantity: e.target.value });
  };

  addQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  subtractQuantity = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };

  updateProductQuantity = () => {
    const { quantity, id, min } = this.state;

    db.collection('products')
      .doc(id)
      .update({
        quantity,
        onShoppingList: quantity < min,
      });
    this.props.toggleChangeQuantityModal();
  };

  toggleEditProductForm = () => {
    this.setState(prevState => ({
      isEditModalVisible: !prevState.isEditModalVisible,
    }));
  };

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalVisibile: !prevState.isDeleteModalVisibile,
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
      isDeleteModalVisibile,
    } = this.state;
    const { toggleChangeQuantityModal, product } = this.props;

    return (
      <Modal>
        <Header>{this.state.name}</Header>

        <TextLabel htmlFor="currentQuantity">Zmień ilość</TextLabel>
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
        <ConfirmAndCancelButtonsWrapper
          cancelOnClick={toggleChangeQuantityModal}
          confirmOnClick={this.updateProductQuantity}
        />
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

        {isDeleteModalVisibile && (
          <DeleteProductModal
            id={id}
            name={name}
            toggleDeleteModal={this.toggleDeleteModal}
          />
        )}

        {this.state.isEditModalVisible && (
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

export default ChangeQuantityForm;
