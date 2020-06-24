import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import DeleteProductModal from '../DeleteProductModal';
import ChangeQuantityForm from '../ChangeQuantityForm';
import ButtonIconEditProduct from '../../atoms/buttons/ButtonIconEditProduct';

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* padding-left: 5%; */
  min-height: 40px;
  line-height: 20px;
  /* border-top: 1px solid grey; */

  @media (min-width: ${({ theme }) => theme.small}) {
    width: 400px;
  }
`;

const StyledCartIconWrapper = styled.div`
  width: 40px;
  display: flex;
  /* background-color: red; */
  align-items: center;
`;

const StyledNameWrapper = styled.div`
  width: calc(100% - 40px);
  overflow-wrap: anywhere;
  padding: 0 10px;
  /* background-color: blue; */

  &:first-letter {
    text-transform: capitalize;
  }
`;

const StyledCenterWrapper = styled.div`
  display: flex;
  width: 20%;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  position: relative;
  width: 50%;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  user-select: none;
  line-height: 40px;
  margin: 0 10px;
  color: ${props => props.theme.grey60};
`;

const StyledQuantityWrapper = styled.div`
  font-weight: 900;
  text-align: center;
`;
const StyledUnitWrapper = styled.div`
  margin-left: 5px;
  text-transform: capitalize;
  text-align: center;
  font-size: 14px;
  width: 10%;
`;

class PantryProduct extends React.Component {
  state = {
    isDeleteModalVisibile: false,
    isChangeQuantityFormVisible: false,
  };

  toggleChangeQuantityModal = () => {
    this.setState(prevState => ({
      isChangeQuantityFormVisible: !prevState.isChangeQuantityFormVisible,
    }));
  };

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalVisibile: !prevState.isDeleteModalVisibile,
    }));
  };

  render() {
    const { isDeleteModalVisibile, isChangeQuantityFormVisible } = this.state;
    const { product } = this.props;
    const { name, quantity, unit, min, id } = product;
    const cartIconShow = quantity < min;

    return (
      <>
        <Wrapper>
          <StyledLeftWrapper>
            <StyledCartIconWrapper>
              {cartIconShow && <StyledIcon icon={faShoppingCart} />}
            </StyledCartIconWrapper>

            <StyledNameWrapper>{name}</StyledNameWrapper>
          </StyledLeftWrapper>
          <StyledCenterWrapper>
            <StyledQuantityWrapper>{quantity}</StyledQuantityWrapper>
            <StyledUnitWrapper>{unit}</StyledUnitWrapper>
          </StyledCenterWrapper>
          <StyledUnitWrapper>({min})</StyledUnitWrapper>

          <StyledRightWrapper>
            <ButtonIconEditProduct onClick={this.toggleChangeQuantityModal} />
          </StyledRightWrapper>

          {isDeleteModalVisibile && (
            <DeleteProductModal id={id} name={name} toggleDeleteModal={this.toggleDeleteModal} />
          )}
        </Wrapper>
        {isChangeQuantityFormVisible && (
          <ChangeQuantityForm
            product={product}
            toggleChangeQuantityModal={this.toggleChangeQuantityModal}
            toggleEditProductForm={this.toggleEditProductForm}
          />
        )}
      </>
    );
  }
}

export default PantryProduct;
