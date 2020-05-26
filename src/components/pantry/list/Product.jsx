import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPen,
  faPlusCircle,
  faMinusCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import AppContext from '../../../context';
import ProductPropertiesForm from '../ProductPropertiesForm';
import DeleteProductModal from '../DeleteProductModal';
import ChangeQuantityForm from '../ChangeQuantityForm';

const StyledWrapper = styled.div`
display: flex;
justify-content: space-between;

padding-left: 5%;
  min-height: 40px;
  line-height: 40px;
  /* color: ${props => props.fontColor}; */
/* word-wrap: break-word; */
`;

const StyledCartIconWrapper = styled.div`
  width: 40px;
  /* cursor: auto !important; */
`;

const StyledNameWrapper = styled.div`
  text-transform: capitalize;
  word-break: break-all;
`;

const StyledCenterWrapper = styled.div`
  display: flex;
  /* flex-direction: column;
  height: 20px; */
  width: 30%;
`;

const StyledRightWrapper = styled.div`
  display: flex;
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
  color: rgba(0, 0, 0, 0.54);
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

const StyledDelteIconWrapper = styled.div`
  margin-right: 5%;
`;

class Product extends React.Component {
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
    const { name, quantity, unit, min, id, category } = product;
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
            <div>
              <StyledIcon icon={faPen} onClick={this.toggleEditProductForm} />
            </div>
            <StyledDelteIconWrapper>
              <StyledIcon
                icon={faTrash}
                onClick={this.toggleChangeQuantityModal}
              />
            </StyledDelteIconWrapper>
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

export default Product;
