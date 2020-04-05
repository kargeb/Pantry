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
  display: flex;
  color: ${props => props.fontColor};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
`;

const StyledPrompt = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vw;
  background-color: green;
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

    let fontColor;

    if (exclamationIconShow) {
      fontColor = 'red';
    } else if (cartIconShow) {
      fontColor = 'orange';
    } else {
      fontColor = 'black';
    }

    return (
      <StyledWrapper fontColor={fontColor}>
        {console.log(`fontColor: ${fontColor}`)}
        {cartIconShow && <StyledIcon icon={faShoppingCart} />}
        {name} {quantity} {unit}
        {/* <StyledIcon icon={faTrash} onClick={() => deleteProduct(id)} /> */}
        <StyledIcon icon={faTrash} onClick={this.handleDelete} />
        <StyledIcon icon={faPen} onClick={() => editProduct(id)} />
        <StyledIcon
          icon={faPlusCircle}
          onClick={() => addProductQuantity(id)}
        />
        <StyledIcon
          className="test"
          icon={faMinusCircle}
          onClick={() => subtractProductQuantity(id)}
        />
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
