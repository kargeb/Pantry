import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ChangeQuantityForm from '../ChangeQuantityForm';
import ButtonIconEditProduct from '../../atoms/buttons/ButtonIconEditProduct';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  line-height: 20px;

  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    width: 400px;
  }
`;

const CartIconWrapper = styled.div`
  margin-left: 2px;
  width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  user-select: none;
`;

const StyledNameWrapper = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  padding: 2px 10px;
  overflow-wrap: anywhere;

  &:first-letter {
    text-transform: capitalize;
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Quantity = styled.div`
  font-weight: 900;
  text-align: right;
`;

const Unit = styled.div`
  margin-left: 5px;
  text-transform: capitalize;
`;

const Min = styled.div`
  flex: 1;
  text-align: center;
`;

class PantryProduct extends React.Component {
  state = {
    isChangeQuantityFormVisible: false,
  };

  toggleChangeQuantityModal = () => {
    this.setState(prevState => ({
      isChangeQuantityFormVisible: !prevState.isChangeQuantityFormVisible,
    }));
  };

  render() {
    const { isChangeQuantityFormVisible } = this.state;
    const { product } = this.props;
    const { name, quantity, unit, min, id } = product;
    const cartIconShow = quantity < min;

    return (
      <>
        <Wrapper>
          <CartIconWrapper>
            {cartIconShow && (
              <Icon>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Icon>
            )}
          </CartIconWrapper>

          <StyledNameWrapper>{name}</StyledNameWrapper>
          <QuantityWrapper>
            <Quantity>{quantity}</Quantity>
            <Unit>{unit}</Unit>
          </QuantityWrapper>
          <Min>({min})</Min>
          <ButtonIconEditProduct onClick={this.toggleChangeQuantityModal} />
        </Wrapper>
        {isChangeQuantityFormVisible && (
          <ChangeQuantityForm
            // product={product}
            name={name}
            id={id}
            quantity={quantity}
            toggleChangeQuantityModal={this.toggleChangeQuantityModal}
          />
        )}
      </>
    );
  }
}

PantryProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
};

export default PantryProduct;
