import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import BuyProductModal from '../buyProductModal/BuyProductModal';
import ButtonBuy from '../atoms/buttons/ButtonBuy';
import ShoppingList from '../../views/ShoppingList';

const StyledWrapper = styled.div`
  /* margin: 5px 0; */
  padding: 0 5%;
  min-height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  /* background-color: grey; */
  /* color: ${props => props.fontColor}; */
  justify-content: center;
/* word-wrap: break-word; */
`;

const StyledNameWrapper = styled.div`
  width: 34%;
`;

const CurrentQuantity = styled.div`
  text-align: center;
  width: 23%;
`;

const Lack = styled.div`
  /* background-color: blue; */
  text-align: center;
  width: 23%;
  font-weight: bold;
  font-size: 18px;
`;

class ShoppingProduct extends React.Component {
  state = {
    isBuyProductModalVisible: false,
  };

  toggleBuyProductModal = () => {
    this.setState(prevState => ({
      isBuyProductModalVisible: !prevState.isBuyProductModalVisible,
    }));
  };

  render() {
    const { name, id, quantity, min } = this.props;
    const lack = min - quantity;

    return (
      <StyledWrapper>
        {/* <div>
          <StyledDotIcon icon={faCircle} />
        </div> */}
        <StyledNameWrapper>{name}</StyledNameWrapper>
        <CurrentQuantity>{quantity}</CurrentQuantity>
        <Lack>{lack}</Lack>
        <ButtonBuy onClick={this.toggleBuyProductModal} />
        {/* <StyledButton
          //   onClick={() => context.completeProductQuantityToMin(id)}
          onClick={this.toggleBuyProductModal}
        >
          <StyledCartIcon icon={faCartArrowDown} />
        </StyledButton> */}
        {this.state.isBuyProductModalVisible && (
          <BuyProductModal
            id={id}
            name={name}
            currentQuantity={quantity}
            min={min}
            lack={lack}
            toggleBuyProductModal={this.toggleBuyProductModal}
          />
        )}
      </StyledWrapper>
    );
  }
}

export default ShoppingProduct;
