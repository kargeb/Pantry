import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PantryView from './PantryView';
import ShoppingListView from './components/views/ShoppingListView';
import AppContext from './context';
import data from './data/db.json';

class Root extends React.Component {
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
    const contextElements = {
      czosz: 'czosz',
      ...this.state,
      handleFormVisibility: this.handleFormVisibility,
      editProduct: this.editProduct,
      addNewProduct: this.addNewProduct,
      deleteProduct: this.deleteProduct,
      subtractProductQuantity: this.subtractProductQuantity,
      addProductQuantity: this.addProductQuantity,
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Switch>
            <Route exact path="/" component={PantryView} />
            <Route exact path="/shoppinglist" component={ShoppingListView} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
