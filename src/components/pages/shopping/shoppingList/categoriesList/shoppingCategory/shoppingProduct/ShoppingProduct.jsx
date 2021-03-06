import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContainerBuyProductModal from './buyProductModal/ContainerBuyProductModal';
// import ButtonIconBuy from '../../styledComponents/buttons/ButtonIconBuy';
import ButtonIconBuy from '../../../../../../styled/buttons/ButtonIconBuy';

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

const Unit = styled.span`
  margin-left: 5px;
  font-size: 12px;
  font-weight: 400;
  /* text-transform: capitalize; */
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
    const { name, id, quantity, min, unit } = this.props;
    const { isBuyProductModalVisible } = this.state;
    const toBuy = min - quantity;

    return (
      <StyledWrapper>
        <NameW>{name}</NameW>
        <CurrentQuantity>{quantity}</CurrentQuantity>
        <Lack>
          {toBuy}
          <Unit>{unit}</Unit>
        </Lack>
        <ButtonIconBuy onClick={this.toggleBuyProductModal} />
        {isBuyProductModalVisible && (
          <ContainerBuyProductModal
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
