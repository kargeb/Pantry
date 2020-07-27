import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import db from '../../../fbase';
import Modal from '../../templates/Modal';
import H1 from '../../atoms/texts/H1';
import Label from '../../atoms/formElements/Label';
import Input from '../../atoms/formElements/Input';
import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';

const WrapperChangeQuantity = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
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

class BuyProductModal extends React.Component {
  constructor(props) {
    super(props);

    const { id, lack, min, currentQuantity } = this.props;

    this.state = {
      min,
      currentQuantity,
      lack,
      id,
    };
  }

  addQuantity = () => {
    const { lack } = this.state;
    this.setState({ lack: lack + 1 });
  };

  subtractQuantity = () => {
    const { lack } = this.state;
    if (lack === 0) {
      return;
    }
    this.setState({ lack: lack - 1 });
  };

  handleInput = e => {
    let { value } = e.target;
    if (value < 0) {
      value = 0;
    }
    this.setState({ lack: value });
  };

  updateProductQuantity = toggleBuyProductModal => {
    const { currentQuantity, id, lack, min } = this.state;
    const quantityAfterShopping = +currentQuantity + +lack;

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
    const { lack } = this.state;

    return (
      <Modal>
        <H1 marginBottomDouble>Ile chcesz kupić?</H1>
        <Label>{name}</Label>
        <WrapperChangeQuantity>
          <ButtonQuantity onClick={this.subtractQuantity}>-</ButtonQuantity>

          <InputNumber
            short
            className="withoutSpinButtons"
            type="number"
            id="currentQuantity"
            value={lack}
            onChange={this.handleInput}
          />
          <ButtonQuantity onClick={this.addQuantity}>+</ButtonQuantity>
        </WrapperChangeQuantity>
        <WrapperButtonsConfirmAndCancel
          cancelOnClick={toggleBuyProductModal}
          confirmOnClick={() => this.updateProductQuantity(toggleBuyProductModal)}
        />
      </Modal>
    );
  }
}

BuyProductModal.propTypes = {
  name: PropTypes.string.isRequired,
  toggleBuyProductModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  lack: PropTypes.number.isRequired,
  min: PropTypes.string.isRequired,
  currentQuantity: PropTypes.number.isRequired,
};

export default BuyProductModal;
