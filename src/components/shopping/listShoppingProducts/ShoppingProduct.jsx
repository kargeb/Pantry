import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BuyProductModal from '../buyProductModal/BuyProductModal';
import ButtonIconBuy from '../../atoms/buttons/ButtonIconBuy';

const StyledWrapper = styled.div`
  padding: 0 5%;
  min-height: 50px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNameWrapper = styled.div`
  width: 34%;
  overflow-wrap: anywhere;
`;

const CurrentQuantity = styled.div`
  text-align: center;
  width: 23%;
`;

const Lack = styled.div`
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
    const { isBuyProductModalVisible } = this.state;
    const lack = min - quantity;

    return (
      <StyledWrapper>
        <StyledNameWrapper>{name}</StyledNameWrapper>
        <CurrentQuantity>{quantity}</CurrentQuantity>
        <Lack>{lack}</Lack>
        <ButtonIconBuy onClick={this.toggleBuyProductModal} />
        {isBuyProductModalVisible && (
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

ShoppingProduct.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  min: PropTypes.string.isRequired,
};

export default ShoppingProduct;
