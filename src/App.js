import React from "react";
import "./styles.css";
import data from "./data/products";
import jar from "../src/assets/images/jar.svg"
import ProductList from "./components/productList/ProductList";

// const producsFromLocalStorage = JSON.parse(localStorage.localProducts);

class App extends React.Component {
  state = {
    products: [...data]
  };

  addNumber = name => {
    console.log(`nacisnales: ${name}`);
    console.log(this.state.products);

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

  render() {
    return (
      <div className="App">
        <h1>Pantry</h1>
        <div>
          {/* <img src={jar} alt="icon"/> */}
        </div>
        <ProductList
          products={this.state.products}
          addNumber={this.addNumber}
        />
      </div>
    );
  }
}

export default App;
