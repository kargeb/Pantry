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

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
  z-index: 5;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  background-color: white;
  z-index: 10;
`;

const QuantityWrapper = styled.div`
  border: 1px solid #6202ee;
  border-radius: 10%;
  display: flex;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  user-select: none;
  line-height: 40px;
  margin: 0 10px;
  color: rgba(0, 0, 0, 0.54);
`;

const StyledQuantityWrapper = styled.div`
  font-weight: 900;
  text-align: center;
`;

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
      <Background>
        <Wrapper>
          <p>Ile kcesz kupicz ?</p>
          <p>
            <strong>{name} </strong> ?
          </p>
          <QuantityWrapper>
            <div>
              <StyledIcon
                icon={faMinusCircle}
                onClick={this.subtractQuantity}
              />
            </div>
            <StyledQuantityWrapper>{lack}</StyledQuantityWrapper>
            <div>
              <StyledIcon icon={faPlusCircle} onClick={this.addQuantity} />
            </div>
          </QuantityWrapper>
          <StyledButtonsWrapper>
            <StyledButton
              type="submit"
              onClick={() => this.updateProductQuantity(toggleBuyProductModal)}
            >
              <StyledConfirmIcon icon={faCheckSquare} />
            </StyledButton>

            <StyledButton type="button" onClick={toggleBuyProductModal}>
              <StyledCancelIcon icon={faTimesCircle} />
            </StyledButton>
          </StyledButtonsWrapper>
        </Wrapper>
      </Background>
    );
  }
}

export default BuyProductModal;
