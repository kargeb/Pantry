import React from 'react';
import './styles.css';
import data from './data/db';
import ProductList from './components/productList/ProductList';
import NewProductForm from './components/newProductForm/NewProductForm';

// const producsFromLocalStorage = JSON.parse(localStorage.localProducts);
// localStorage.localProducts = JSON.stringify(newProducts);

class App extends React.Component {
  state = {
    products: [...data.products],
    categories: [...data.categories],
  };

  addProductQuantity = (name) => {
    const newProducts = this.state.products.map((product) => {
      if (product.name === name) {
        product.quantity++;
      }
      return product;
    });
    this.setState({ products: [...newProducts] });
    console.log(JSON.stringify(newProducts));
    console.log(newProducts);
  };

  subtractProductQuantity = (name) => {
    const newProducts = this.state.products.map((product) => {
      if (product.name === name) {
        product.quantity--;
      }
      return product;
    });
    this.setState({ products: [...newProducts] });
    console.log(JSON.stringify(newProducts));
    console.log(newProducts);
  };

  deleteProduct = (name) => {
    const remainingProducts = this.state.products.filter(
      (product) => product.name !== name,
    );

    this.setState({ products: [...remainingProducts] });

    console.log(remainingProducts);
  };

  addNewProduct = (newProduct) => {
    console.log(newProduct);

    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Pantry</h1>
        <NewProductForm
          addNewProduct={this.addNewProduct}
          categories={this.state.categories}
        />
        <ul>
          {this.state.categories.map((category) => {
            const productsOfCategory = this.state.products.filter(
              (product) => product.category === category,
            );

            console.log(`w categorii: ${category} mamy nastepujace produkty`);
            console.log(productsOfCategory);
          })}
        </ul>
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
