import React from 'react';
import './styles.css';
import styled from 'styled-components';

import data from './data/db';
import ProductList from './components/productList/ProductList';
import NewProductForm from './components/newProductForm/NewProductForm';
import ShoppingList from './components/shoppingList/ShoppingList';

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

class App extends React.Component {
  state = {
    products: [...data.products],
    categories: [...data.categories],
    isFormVisible: false,
    shoppingList: [],
    defaultProduct: {
      name: '',
      quantity: '',
      category: '',
      min: '3',
      unit: 'szt',
      id: null,
    },
  };

  componentDidMount() {
    console.log('jestem w did mount');
    this.state.products.forEach(product => this.checkShoppingList(product));
  }

  checkShoppingList = product => {
    console.log('jestem w czekongui shopping lisy');
    if (product.min > product.quantity) {
      console.log(`produkt: ${product.name} powinien byc na liscie:`);

      const isProductInShoppintList = this.state.shoppingList.filter(
        prevProduct => prevProduct.id === product.id,
      );

      console.log(`isProductInShoppintList ${isProductInShoppintList.length}`);

      if (isProductInShoppintList) {
        console.log(`ten produkt ${product.name}juz jest w liscie`);
      }

      if (!isProductInShoppintList.length) {
        this.setState(prevState => ({
          shoppingList: [...prevState.shoppingList, product],
        }));
      }
    } else {
      const newShoppingList = this.state.shoppingList.filter(
        prevProduct => prevProduct.id !== product.id,
      );

      this.setState({ shoppingList: [...newShoppingList] });
    }
  };

  addProductQuantity = id => {
    const newProducts = this.state.products.map(product => {
      if (product.id === id) {
        product.quantity++;
        this.checkShoppingList(product);
      }
      return product;
    });
    this.setState({ products: [...newProducts] });
    console.log(JSON.stringify(newProducts));
    console.log(newProducts);
  };

  subtractProductQuantity = id => {
    console.log(`ID => ${id}`);
    const newProducts = this.state.products.map(product => {
      if (product.id === id) {
        product.quantity--;
        this.checkShoppingList(product);
      }
      return product;
    });
    this.setState({ products: [...newProducts] });
    console.log(JSON.stringify(newProducts));
    console.log(newProducts);
  };

  deleteProduct = id => {
    const remainingProducts = this.state.products.filter(
      product => product.id !== id,
    );

    const shoppingListWithoutDeleteProduct = this.state.shoppingList.filter(
      prevProduct => prevProduct.id !== id,
    );

    this.setState({
      products: [...remainingProducts],
      shoppingList: [...shoppingListWithoutDeleteProduct],
    });

    console.log(remainingProducts);
  };

  addNewProduct = newProduct => {
    console.log(newProduct);
    console.log(`ID : ${newProduct.id}`);

    if (newProduct.id) {
      const newProducts = this.state.products.map(product => {
        if (product.id === newProduct.id) {
          product = { ...newProduct };
          return product;
        }
        return product;
      });

      this.setState({ products: [...newProducts] });
    } else {
      this.setState(prevState => ({
        products: [...prevState.products, newProduct],
      }));
    }
  };

  editProduct = id => {
    const editingProduct = this.state.products.filter(
      product => product.id === id,
    )[0];

    this.setState({ defaultProduct: { ...editingProduct } });
    this.handleFormVisibility();

    console.log('product do edycji');
    console.log(editingProduct);
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
          <h3>Shopping List {this.state.shoppingList.length}</h3>
        </StyledMenu>
        <button type="button" onClick={this.handleFormVisibility}>
          Dodaj
        </button>
        {this.state.isFormVisible && (
          <NewProductForm
            defaultProduct={this.state.defaultProduct}
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
                    editProduct={this.editProduct}
                  />
                </li>
              );
            }
          })}
        </ul>
        <ShoppingList shoppingList={this.state.shoppingList} />
      </div>
    );
  }
}

export default App;
