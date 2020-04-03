import React from "react";
import styles from "./Product.module.css";

localStorage.dummyData = "test";

const Product = ({ name, number, unit, addNumber }) => (
  <div className={styles.wrapper}>
    <div>
      {name} {number} {unit}
      <div onClick={() => addNumber(name)}>+</div>
      <div>-</div>
    </div>
  </div>
);

export default Product;
