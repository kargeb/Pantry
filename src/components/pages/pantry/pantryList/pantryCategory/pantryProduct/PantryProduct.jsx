import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import FormChangeQuantityContainer from './FormChangeQuantity/container/FormChangeQuantityContainer';
import ButtonIconEditProduct from '../../../../../styled/buttons/ButtonIconEditProduct';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  line-height: 20px;

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
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

  /* Animation is disabled because of GPU overload.
  It happens when modal with blurred background is appearing. */
  /* animation: zoomInOut 1.5s linear infinite; */

  @keyframes zoomInOut {
    0% {
      transform: scale(0.8, 0.8);
    }
    50% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0.8, 0.8);
    }
  }
`;

const Name = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  padding: 2px 10px;
  overflow-wrap: anywhere;
  text-transform: capitalize;

  &:first-letter {
    text-transform: capitalize;
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Quantity = styled.div`
  font-weight: 900;
  text-align: center;
  font-size: 18px;
`;

const Unit = styled.div`
  margin-left: 5px;
  font-size: 12px;
  /* text-transform: capitalize; */
`;

const Min = styled.div`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.minQuantityColor};
`;

class PantryProduct extends React.Component {
  state = {
    isFormChangeQuantityContainerVisible: false,
  };

  toggleChangeQuantityModal = () => {
    this.setState(prevState => ({
      isFormChangeQuantityContainerVisible: !prevState.isFormChangeQuantityContainerVisible,
    }));
  };

  render() {
    const { isFormChangeQuantityContainerVisible } = this.state;
    const { product } = this.props;
    const { name, quantity, unit, min, id, category } = product;
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

          <Name>{name}</Name>
          <Min>{min}</Min>
          <QuantityWrapper>
            <Quantity>{quantity}</Quantity>
            <Unit>{unit}</Unit>
          </QuantityWrapper>
          <ButtonIconEditProduct onClick={this.toggleChangeQuantityModal} />
        </Wrapper>
        {isFormChangeQuantityContainerVisible && (
          <FormChangeQuantityContainer
            product={product}
            min={min}
            name={name}
            id={id}
            quantity={quantity}
            category={category}
            unit={unit}
            toggleChangeQuantityModal={this.toggleChangeQuantityModal}
          />
        )}
      </>
    );
  }
}

PantryProduct.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
};

export default PantryProduct;
