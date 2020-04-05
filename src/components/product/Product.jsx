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
import styles from './Product.module.css';

const StyledWrapper = styled.div`
  display: flex;
  color: ${props => props.fontColor};
`;

const StledIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
`;

const Product = ({
  name,
  quantity,
  unit,
  addProductQuantity,
  subtractProductQuantity,
  deleteProduct,
  editProduct,
  min,
  id,
}) => {
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
      {cartIconShow && <StledIcon icon={faShoppingCart} />}
      {name} {quantity} {unit}
      <StledIcon icon={faTrash} onClick={() => deleteProduct(id)} />
      <StledIcon icon={faPen} onClick={() => editProduct(id)} />
      <StledIcon icon={faPlusCircle} onClick={() => addProductQuantity(id)} />
      <StledIcon
        icon={faMinusCircle}
        onClick={() => subtractProductQuantity(id)}
      />
      {exclamationIconShow && <StledIcon icon={faExclamation} />}
    </StyledWrapper>
  );
};

export default Product;
