import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPen,
  faPlusCircle,
  faMinusCircle,
  faExclamation,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import AppContext from '../../context';
import EditProductForm from '../editProductForm/EditProductForm';
import DeleteProductModal from '../deleteProduct/DeleteProductModal';

const StyledWrapper = styled.div`
padding-left: 5%;
  min-height: 40px;
  line-height: 40px;
  display: flex;
  /* color: ${props => props.fontColor}; */
  justify-content: space-between;
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
`;

const StyledDelteIconWrapper = styled.div`
  margin-right: 5%;
`;

const StyledExclamationIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -10%;
`;

const StyledExclamationIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  line-height: 40px;
  margin: 0 10px;
  color: red;
`;

class Product extends React.Component {
  state = {
    isDeleteModalVisibile: false,
    isEditModalVisible: false,
  };

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalVisibile: !prevState.isDeleteModalVisibile,
    }));
  };

  toggleEditProductForm = () => {
    this.setState(prevState => ({
      isEditModalVisible: !prevState.isEditModalVisible,
    }));
  };

  render() {
    const { name, quantity, unit, min, id, category } = this.props;

    const cartIconShow = quantity < min;
    const exclamationIconShow = !quantity;

    return (
      <StyledWrapper>
        <StyledLeftWrapper>
          <StyledExclamationIconWrapper>
            {exclamationIconShow && (
              <StyledExclamationIcon icon={faExclamation} />
            )}
          </StyledExclamationIconWrapper>
          <StyledCartIconWrapper>
            {cartIconShow && <StyledIcon icon={faShoppingCart} />}
          </StyledCartIconWrapper>
          <div>
            <StyledNameWrapper>{name}</StyledNameWrapper>
          </div>
        </StyledLeftWrapper>
        <StyledCenterWrapper>
          {/* <div>
            <StyledIcon icon={faMinusCircle} onClick={() => {}} />
          </div> */}

          <StyledQuantityWrapper>{quantity}</StyledQuantityWrapper>
          <StyledUnitWrapper>{unit}</StyledUnitWrapper>
          {/* <div>
            <StyledIcon icon={faPlusCircle} onClick={() => {}} />
          </div> */}
        </StyledCenterWrapper>
        <StyledRightWrapper>
          <div>
            <StyledIcon icon={faPen} onClick={this.toggleEditProductForm} />
          </div>
          <StyledDelteIconWrapper>
            <StyledIcon icon={faTrash} onClick={this.toggleDeleteModal} />
          </StyledDelteIconWrapper>
        </StyledRightWrapper>

        {this.state.isDeleteModalVisibile && (
          <DeleteProductModal
            id={id}
            name={name}
            toggleDeleteModal={this.toggleDeleteModal}
          />
        )}

        {this.state.isEditModalVisible && (
          <EditProductForm
            id={id}
            name={name}
            quantity={quantity}
            unit={unit}
            min={min}
            category={category}
            toggleEditProductForm={this.toggleEditProductForm}
          />
        )}
      </StyledWrapper>
    );
  }
}

export default Product;
