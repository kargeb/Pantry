import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faCheckSquare,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import db from '../../fbase';
import Modal from '../templates/ModalTemplate';
import TextHeader from '../atoms/texts/TextHeader';
import TextLabel from '../atoms/texts/TextLabel';
import Input from '../atoms/formElements/Input';
import ConfirmAndCancelButtonsWrapper from '../molecules/ConfirmAndCancelButtonsWrapper';

const StyledButtonsWrapper = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
`;

const StyledConfirmIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: #01a39d;
`;

const StyledCancelIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: rgba(0, 0, 0, 0.54);
`;

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
    this.setState({ lack: this.state.lack - 1 });
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
        <Header>Ile kcesz kupicz ?</Header>
        <TextLabel>{name}</TextLabel>
        {/* <Background>
        <Wrapper> */}
        {/* <p>Ile kcesz kupicz ?</p>
        <p>
          <strong>{name} </strong> ?
        </p> */}
        <WrapperChangeQuantity>
          <ButtonQuantity onClick={this.subtractQuantity}>-</ButtonQuantity>

          <InputNumber
            short
            className="withoutSpinButtons"
            type="number"
            id="currentQuantity"
            value={lack}
            // onChange={this.handleInput}
          />
          <ButtonQuantity onClick={this.addQuantity}>+</ButtonQuantity>
        </WrapperChangeQuantity>

        {/* <QuantityWrapper>
          <div>
            <StyledIcon icon={faMinusCircle} onClick={this.subtractQuantity} />
          </div>
          <StyledQuantityWrapper>{lack}</StyledQuantityWrapper>
          <div>
            <StyledIcon icon={faPlusCircle} onClick={this.addQuantity} />
          </div>
        </QuantityWrapper> */}

        <ConfirmAndCancelButtonsWrapper
          cancelOnClick={toggleBuyProductModal}
          confirmOnClick={() =>
            this.updateProductQuantity(toggleBuyProductModal)
          }
        />

        {/* <StyledButtonsWrapper>
          <StyledButton
            type="submit"
            onClick={() => this.updateProductQuantity(toggleBuyProductModal)}
          >
            <StyledConfirmIcon icon={faCheckSquare} />
          </StyledButton>

          <StyledButton type="button" onClick={toggleBuyProductModal}>
            <StyledCancelIcon icon={faTimesCircle} />
          </StyledButton>
        </StyledButtonsWrapper> */}
        {/* </Wrapper>
      </Background> */}
      </Modal>
    );
  }
}

export default BuyProductModal;
