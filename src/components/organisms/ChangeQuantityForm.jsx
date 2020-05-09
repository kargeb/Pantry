import React from 'react';
import Modal from '../templates/ModalTemplate';
import TextHeader from '../texts/TextHeader';
import TextLabel from '../texts/TextLabel';
import Input from '../formElements/Input';
import ButtonCancel from '../buttons/ButtonCancel';
import ButtonConfirm from '../buttons/ButtonConfirm';
import Button from '../buttons/Button';
import ButtonQuantity from '../buttons/ButtonQuantity';

class ChangeQuantityForm extends React.Component {
  state = {
    name: this.props.name,
    quantity: this.props.quantity,
    id: this.props.id,
  };

  handleForm = e => {
    console.log(e.target.value);
    console.log(e.target.id);

    this.setState({ quantity: e.target.value });
  };

  render() {
    const { quantity } = this.state;
    const { toggleChangeQuantityModal, toggleEditProductForm } = this.props;

    return (
      <Modal>
        <TextHeader>Zmień ilość</TextHeader>

        <TextLabel htmlFor="currentQuantity">{this.state.name}</TextLabel>
        <ButtonQuantity>-</ButtonQuantity>
        {/* <button>minus</button> */}
        <Input
          short
          type="number"
          id="currentQuantity"
          value={quantity}
          onChange={this.handleForm}
        />
        <ButtonQuantity>+</ButtonQuantity>
        {/* <button>plus</button> */}
        <ButtonCancel type="button" onClick={toggleChangeQuantityModal} />
        <ButtonConfirm />

        <Button type="button" onClick={toggleEditProductForm}>
          Edytuj
        </Button>
        {/* <button type="button" onClick={toggleEditProductForm}>
          Edytuj
        </button> */}
        <Button type="button" onClick={() => {}}>
          Usuń
        </Button>
        {/* <button type="button">Usuń</button> */}
      </Modal>
    );
  }
}

export default ChangeQuantityForm;
