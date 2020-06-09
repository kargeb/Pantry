import React from 'react';
import styled from 'styled-components';
import db from '../../../fbase';
import Modal from '../../templates/TemplateModal';
import TextHeader from '../../atoms/texts/TextHeader';
import Label from '../../atoms/formElements/Label';
import Input from '../../atoms/formElements/Input';
import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';

const Header = styled(TextHeader)`
  margin-bottom: 5px;
`;

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
    this.setState({ lack: this.state.lack + 1 });
  };

  subtractQuantity = () => {
    const { lack } = this.state;
    if (lack == 0) {
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
        <Header>Ile chcesz kupić ?</Header>
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
          confirmOnClick={() =>
            this.updateProductQuantity(toggleBuyProductModal)
          }
        />
      </Modal>
    );
  }
}

export default BuyProductModal;