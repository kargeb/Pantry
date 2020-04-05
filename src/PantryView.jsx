import React from 'react';
import './styles.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from './data/db.json';
import ProductList from './components/productList/ProductList';
import NewProductForm from './components/newProductForm/NewProductForm';
import AppContext from './context';

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

class PantryView extends React.Component {
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
    this.state.products.forEach(product => this.checkShoppingList(product));
  }

  checkShoppingList = product => {
    if (product.min > product.quantity) {
      const isProductInShoppintList = this.state.shoppingList.filter(
        prevProduct => prevProduct.id === product.id,
      );

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
  };

  subtractProductQuantity = id => {
    const newProducts = this.state.products.map(product => {
      if (product.id === id) {
        product.quantity--;
        this.checkShoppingList(product);
      }
      return product;
    });
    this.setState({ products: [...newProducts] });
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
      <AppContext.Consumer>
        {context => (
          <div className="App">
            <h4>Settings {context.czosz}</h4>
            <StyledMenu>
              <h3>Pantry</h3>
              <Link to="/shoppinglist">
                <h3>Shopping List {this.state.shoppingList.length}</h3>{' '}
              </Link>
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
                  console.log(
                    `w categorii: ${category} mamy nastepujace produkty`,
                  );
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
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default PantryView;
