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

const StyledPrompt = styled.div`
  position: absolute;
  display: flex;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  background-color: white;
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

// const Prompt = ({ handleDelete, deleteProduct, id, name }) => (
//   <StyledPrompt>
//     <p>Usunąc ?</p>
//     <p>{name}</p>
//     <button onClick={() => deleteProduct(id)}>tak</button>
//     <button onClick={handleDelete}>nie</button>
//   </StyledPrompt>
// );

class Product extends React.Component {
  state = {
    isPromptVisibile: false,
  };

  toggleDeleteModal = () => {
    this.setState({ isPromptVisibile: !this.state.isPromptVisibile });
  };

  render() {
    const {
      name,
      quantity,
      unit,
      addProductQuantity,
      subtractProductQuantity,
      deleteProduct,
      editProduct,
      min,
      id,
    } = this.props;

    const cartIconShow = quantity < min;
    const exclamationIconShow = !quantity;

    // let fontColor;

    // if (exclamationIconShow) {
    //   fontColor = 'red';
    // } else if (cartIconShow) {
    //   fontColor = 'orange';
    // } else {
    //   fontColor = 'black';
    // }

    return (
      // <StyledWrapper fontColor={fontColor}>
      <AppContext.Consumer>
        {context => (
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
              <div>
                <StyledIcon
                  icon={faMinusCircle}
                  onClick={() => subtractProductQuantity(id)}
                />
              </div>

              <StyledQuantityWrapper>{quantity}</StyledQuantityWrapper>
              <StyledUnitWrapper>{unit}</StyledUnitWrapper>
              <div>
                <StyledIcon
                  icon={faPlusCircle}
                  onClick={() => addProductQuantity(id)}
                />
              </div>
            </StyledCenterWrapper>
            <StyledRightWrapper>
              <div>
                {/* <StyledEditIconWrapper> */}
                <StyledIcon icon={faPen} onClick={() => editProduct(id)} />
                {/* </StyledEditIconWrapper> */}
              </div>
              <StyledDelteIconWrapper>
                <StyledIcon icon={faTrash} onClick={this.toggleDeleteModal} />
              </StyledDelteIconWrapper>
            </StyledRightWrapper>

            {this.state.isPromptVisibile && (
              <DeleteProductModal
                id={id}
                name={name}
                toggleDeleteModal={this.toggleDeleteModal}
              />
            )}
          </StyledWrapper>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Product;
