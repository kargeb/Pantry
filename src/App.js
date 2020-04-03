import React from "react";
import "./styles.css";
import data from "./data/products";
import ProductList from "./components/productList/ProductList";

// const producsFromLocalStorage = JSON.parse(localStorage.localProducts);

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
    // localStorage.localProducts = JSON.stringify(newProducts);
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
    // localStorage.localProducts = JSON.stringify(newProducts);
    console.log(newProducts);
  };



  render() {
    return (
      <div className="App">
        <h1>Pantry</h1>
        <ProductList
          products={this.state.products}
          addProductQuantity={this.addProductQuantity}
          subtractProductQuantity={this.subtractProductQuantity}
        />
      </div>
    );
  }
}

export default App;
