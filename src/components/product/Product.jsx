import React from "react";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// localStorage.dummyData = "test";

const StyledWrapper = styled.div`
  display: flex;
  color: blue;
`;

const Product = ({
  name,
  quantity,
  unit,
  addProductQuantity,
  subtractProductQuantity,
  deleteProduct
}) => (
  <StyledWrapper>
    {name} {quantity} {unit}
    {/* <div onClick={() => addProductQuantity(name)}>+</div>
    <div onClick={() => subtractProductQuantity(name)}>-</div> */}
    <FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(name)} />
    <FontAwesomeIcon icon={faPen} />
    <FontAwesomeIcon
      icon={faPlusCircle}
      onClick={() => addProductQuantity(name)}
    />
    <FontAwesomeIcon
      icon={faMinusCircle}
      onClick={() => subtractProductQuantity(name)}
    />
  </StyledWrapper>
);

export default Product;
