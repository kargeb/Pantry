import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPen,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import styles from './Product.module.css';

// localStorage.dummyData = "test";

const StyledWrapper = styled.div`
  display: flex;
  color: blue;
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
  id,
}) => (
  <StyledWrapper>
    {name} {quantity} {unit}
    {/* <div onClick={() => addProductQuantity(name)}>+</div>
    <div onClick={() => subtractProductQuantity(name)}>-</div> */}
    <StledIcon icon={faTrash} onClick={() => deleteProduct(id)} />
    <StledIcon icon={faPen} onClick={() => editProduct(id)} />
    <StledIcon icon={faPlusCircle} onClick={() => addProductQuantity(id)} />
    <StledIcon
      icon={faMinusCircle}
      onClick={() => subtractProductQuantity(id)}
    />
    {quantity ? <div> </div> : <div>!!</div>}
  </StyledWrapper>
);

export default Product;
