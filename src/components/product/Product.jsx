import React from "react";
import styles from "./Product.module.css";

localStorage.dummyData = "test";

const Product = ({ name, number, unit, addProductQuantity, subtractProductQuantity }) => (
  <div className={styles.wrapper}>
    <div>
      {name} {number} {unit}
      <div onClick={() => addProductQuantity(name)}>+</div>
      <div onClick={() => subtractProductQuantity(name)}>-</div>
    </div>
  </div>
);

export default Product;
