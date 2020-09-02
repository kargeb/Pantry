import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContainerBuyProduct from '../buyProductModal/ContainerBuyProduct';
import ButtonIconBuy from '../../atoms/buttons/ButtonIconBuy';

const StyledWrapper = styled.div`
  padding: 0 10px;
  min-height: 40px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

const NameW = styled.div`
  flex: 3;
  overflow-wrap: anywhere;
  text-transform: capitalize;
`;

const CurrentQuantity = styled.div`
  text-align: center;
  flex: 1;
`;

const Lack = styled.div`
  flex: 1;
  text-align: center;
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
    const toBuy = min - quantity;

    return (
      <StyledWrapper>
        <NameW>{name}</NameW>
        <CurrentQuantity>{quantity}</CurrentQuantity>
        <Lack>{toBuy}</Lack>
        <ButtonIconBuy onClick={this.toggleBuyProductModal} />
        {isBuyProductModalVisible && (
          <ContainerBuyProduct
            id={id}
            name={name}
            currentQuantity={quantity}
            min={min}
            toBuy={toBuy}
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
  min: PropTypes.number.isRequired,
};

export default ShoppingProduct;
