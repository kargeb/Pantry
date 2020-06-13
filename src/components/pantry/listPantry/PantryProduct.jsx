import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import DeleteProductModal from '../DeleteProductModal';
import ChangeQuantityForm from '../ChangeQuantityForm';
import ButtonIconEditProduct from '../../atoms/buttons/ButtonIconEditProduct';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  min-height: 40px;
  line-height: 40px;

  @media (min-width: ${({ theme }) => theme.small}) {
    width: 300px;
  }
`;

const StyledCartIconWrapper = styled.div`
  /* height: 100%; */
  width: 40px;
  display: flex;
  align-items: center;
  /* line-height: 100%; */
`;

const StyledNameWrapper = styled.div`
  /* width: 100px; */
  text-transform: capitalize;
  overflow-wrap: break-word;
  /* overflow-x: hidden; */
  /* word-break: break-all; */
`;

const StyledCenterWrapper = styled.div`
  display: flex;
  width: 30%;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  position: relative;
  width: 55%;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  user-select: none;
  line-height: 40px;
  margin: 0 10px;
  color: ${props => props.theme.textPrimary};
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
        <StyledWrapper>
          <StyledLeftWrapper>
            <StyledCartIconWrapper>
              {cartIconShow && <StyledIcon icon={faShoppingCart} />}
            </StyledCartIconWrapper>
            <div>
              <StyledNameWrapper>{name}</StyledNameWrapper>
            </div>
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
            <DeleteProductModal
              id={id}
              name={name}
              toggleDeleteModal={this.toggleDeleteModal}
            />
          )}
        </StyledWrapper>
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
