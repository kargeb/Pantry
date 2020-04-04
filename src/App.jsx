import React from 'react';
import './styles.css';
import styled from 'styled-components';
import data from './data/db';
import ProductList from './components/productList/ProductList';
import NewProductForm from './components/newProductForm/NewProductForm';

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

class App extends React.Component {
  state = {
    products: [...data.products],
    categories: [...data.categories],
    isFormVisible: false,
    shoppingCart: [],
  };

  componentDidUpdate() {
    console.log('did Update');
    const productsToShoppingCart = this.state.products.filter(
      product => product.quantity < product.min,
    );
    console.log(productsToShoppingCart);
  }

  addProductQuantity = name => {
    const newProducts = this.state.products.map(product => {
      if (product.name === name) {
        product.quantity++;
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
        product.quantity--;
      }
      return product;
    });
    this.setState({ products: [...newProducts] });
    console.log(JSON.stringify(newProducts));
    console.log(newProducts);
  };

  deleteProduct = name => {
    const remainingProducts = this.state.products.filter(
      product => product.name !== name,
    );

    this.setState({ products: [...remainingProducts] });

    console.log(remainingProducts);
  };

  addNewProduct = newProduct => {
    console.log(newProduct);

    this.setState(prevState => ({
      products: [...prevState.products, newProduct],
    }));
  };

  handleFormVisibility = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }));
  };

  render() {
    const { categories, products } = this.state;

    return (
      <div className="App">
        <h4>Settings</h4>
        <StyledMenu>
          <h3>Pantry</h3>
          <h3>Shopping List</h3>
        </StyledMenu>
        <button type="button" onClick={this.handleFormVisibility}>
          Dodaj
        </button>
        {this.state.isFormVisible && (
          <NewProductForm
            handleFormVisibility={this.handleFormVisibility}
            addNewProduct={this.addNewProduct}
            categories={categories}
          />
        )}
        <ul>
          {categories.map(category => {
            const productsOfCategory = products.filter(
              product => product.category === category,
            );
            if (productsOfCategory.length) {
              console.log(`w categorii: ${category} mamy nastepujace produkty`);
              console.log(productsOfCategory);
              return (
                <li>
                  <p>{category}</p>
                  <ProductList
                    products={productsOfCategory}
                    addProductQuantity={this.addProductQuantity}
                    subtractProductQuantity={this.subtractProductQuantity}
                    deleteProduct={this.deleteProduct}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default App;
