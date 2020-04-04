import React from "react";
import "./styles.css";
import data from "./data/products";
import ProductList from "./components/productList/ProductList";
import NewQuestionForm from "../src/components/newQuestionForm/NewQuestionForm";

// const producsFromLocalStorage = JSON.parse(localStorage.localProducts);
// localStorage.localProducts = JSON.stringify(newProducts);

class App extends React.Component {
  state = {
    products: [...data]
  };

  addProductQuantity = name => {
    const newProducts = this.state.products.map(product => {
      if (product.name === name) {
        product.number++;
      }
      return product;
    });
    this.setState({ products: [...newProducts] });
    console.log(JSON.stringify(newProducts));
    console.log(newProducts);
  };

  subtractProductQuantity = name => {
    const newProducts = this.state.products.map(product => {
      if (product.name === name) {
        product.number--;
      }
      return product;
    });
    this.setState({ products: [...newProducts] });
    console.log(JSON.stringify(newProducts));
    console.log(newProducts);
  };

  deleteProduct = name => {
    const remainingProducts = this.state.products.filter(
      product => product.name !== name
    );

    this.setState({ products: [...remainingProducts] });

    console.log(remainingProducts);
  };

  render() {
    return (
      <div className="App">
        <h1>Pantry</h1>
        <h1>Pantry</h1>
        <NewQuestionForm />
        <ProductList
          products={this.state.products}
          addProductQuantity={this.addProductQuantity}
          subtractProductQuantity={this.subtractProductQuantity}
          deleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}

export default App;
