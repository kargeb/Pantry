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

const StyledWrapper = styled.div`
  margin-left: 40px;
  height: 40px;
  line-height: 40px;
  display: flex;
  /* color: ${props => props.fontColor}; */
`;

const StyledCartIconWrapper = styled.div`
  width: 40px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  line-height: 40px;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.54);
`;

const StyledNameWrapper = styled.div`
  text-transform: capitalize;
  width: 30%;
`;
const StyledQuantityWrapper = styled.div`
  font-weight: 900;
  width: 25px;
  text-align: center;
`;
const StyledUnitWrapper = styled.div`
  text-transform: capitalize;
  width: 25px;
  text-align: center;
`;

const StyledPrompt = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vw;
  background-color: green;
`;

const StyledEditIconWrapper = styled.div`
  margin-left: 100px;
  margin-right: 10px;
`;

const Prompt = ({ handleDelete, deleteProduct, id }) => (
  <StyledPrompt>
    Napewno chcesz usunąc ?
    <button onClick={() => deleteProduct(id)}>tak</button>
    <button onClick={handleDelete}>nie</button>
  </StyledPrompt>
);

class Product extends React.Component {
  state = {
    isPromptVisibile: false,
  };

  handleDelete = () => {
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
      <StyledWrapper>
        {/* {console.log(`fontColor: ${fontColor}`)} */}
        <StyledCartIconWrapper>
          {cartIconShow && <StyledIcon icon={faShoppingCart} />}
        </StyledCartIconWrapper>
        <StyledNameWrapper>{name}</StyledNameWrapper>
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
        <StyledEditIconWrapper>
          <StyledIcon icon={faPen} onClick={() => editProduct(id)} />
        </StyledEditIconWrapper>
        <div>
          <StyledIcon icon={faTrash} onClick={this.handleDelete} />
        </div>

        {exclamationIconShow && <StyledIcon icon={faExclamation} />}
        {this.state.isPromptVisibile && (
          <Prompt
            handleDelete={this.handleDelete}
            id={id}
            deleteProduct={deleteProduct}
          />
        )}
      </StyledWrapper>
    );
  }
}

// = ({
//   name,
//   quantity,
//   unit,
//   addProductQuantity,
//   subtractProductQuantity,
//   deleteProduct,
//   editProduct,
//   min,
//   id,
// }) => {
//   const cartIconShow = quantity < min;
//   const exclamationIconShow = !quantity;

//   let fontColor;

//   if (exclamationIconShow) {
//     fontColor = 'red';
//   } else if (cartIconShow) {
//     fontColor = 'orange';
//   } else {
//     fontColor = 'black';
//   }

// };

export default Product;
