import React from 'react';
import styled from 'styled-components';
import Modal from '../templates/ModalTemplate';
import TextHeader from '../texts/TextHeader';
import TextLabel from '../texts/TextLabel';
import Input from '../formElements/Input';
import ButtonCancel from '../buttons/ButtonCancel';
import ButtonConfirm from '../buttons/ButtonConfirm';
import Button from '../buttons/Button';
import db from '../../fbase';
// import ButtonQuantity from '../buttons/ButtonQuantity';

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

const WrapperConfirmCancelButtons = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  margin-top: 20px;
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
    const { name, quantity, id, min } = this.props;
    this.state = {
      name,
      quantity,
      id,
      min,
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

  render() {
    const { quantity } = this.state;
    const { toggleChangeQuantityModal, toggleEditProductForm } = this.props;

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
        <WrapperConfirmCancelButtons>
          <ButtonCancel type="button" onClick={toggleChangeQuantityModal} />
          <ButtonConfirm type="button" onClick={this.updateProductQuantity} />
        </WrapperConfirmCancelButtons>
        <WrapperEditDeleteButtons>
          <Button
            type="button"
            onClick={() => {
              toggleEditProductForm();
              this.updateProductQuantity();
            }}
          >
            Edytuj
          </Button>
          {/* <button type="button" onClick={toggleEditProductForm}>
          Edytuj
        </button> */}
          <Button type="button" onClick={() => {}}>
            Usuń
          </Button>
        </WrapperEditDeleteButtons>
        {/* <button type="button">Usuń</button> */}
      </Modal>
    );
  }
}

export default ChangeQuantityForm;
