import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pantry from './views/Pantry';
import ShoppingList from './views/ShoppingList';
import AppContext from './context';
import data from './data/db.json';
import GlobalStyle from './themes/GlobalStyle';
import Settings from './views/Settings';

class Root extends React.Component {
  state = {
    products: [...data.products],
    categories: [...data.categories],
    isFormVisible: false,
    shoppingList: [],
    // defaultProduct: {
    //   name: '',
    //   quantity: '',
    //   category: '',
    //   min: '3',
    //   unit: 'szt',
    //   id: null,
    // },
    isShoppingListPromptVisible: false,
  };

  componentDidMount() {
    this.state.products.forEach(product => this.checkShoppingList(product));
  }

  componentDidUpdate() {
    console.log('UPDATE');
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
        if (product.quantity > 0) {
          product.quantity--;
          this.checkShoppingList(product);
        }
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
    // console.log(`ID : ${newProduct.id}`);

    // if (newProduct.id) {
    //   const newProducts = this.state.products.map(product => {
    //     if (product.id === newProduct.id) {
    //       product = { ...newProduct };
    //       return product;
    //     }
    //     return product;
    //   });

    //   this.setState({ products: [...newProducts] });
    // } else {
    // this.setState(prevState => ({
    //   products: [...prevState.products, newProduct],
    // }));
    // }

    // this.setState({
    //   defaultProduct: {
    //     name: '',
    //     quantity: '',
    //     category: '',
    //     min: '3',
    //     unit: 'szt',
    //     id: null,
    //   },
    // });
  };

  editProduct = id => {
    // const editingProduct = this.state.products.filter(
    //   product => product.id === id,
    // )[0];
    // this.setState({ defaultProduct: { ...editingProduct } });
    // this.handleFormVisibility();
    // console.log('product do edycji');
    // console.log(editingProduct);
  };

  handleFormVisibility = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }));
  };

  completeProductQuantityToMin = id => {
    const newProducts = this.state.products.map(product => {
      if (product.id === id) {
        product.quantity = product.min;
        this.checkShoppingList(product);
      }
      return product;
    });
    this.setState({ products: [...newProducts] });
  };

  toggleShoppingListPrompt = () => {
    this.setState({
      isShoppingListPromptVisible: !this.state.isShoppingListPromptVisible,
    });
  };

  render() {
    const contextElements = {
      ...this.state,
      handleFormVisibility: this.handleFormVisibility,
      editProduct: this.editProduct,
      addNewProduct: this.addNewProduct,
      deleteProduct: this.deleteProduct,
      subtractProductQuantity: this.subtractProductQuantity,
      addProductQuantity: this.addProductQuantity,
      completeProductQuantityToMin: this.completeProductQuantityToMin,
      toggleShoppingListPrompt: this.toggleShoppingListPrompt,
    };
    return (
      <BrowserRouter>
        <GlobalStyle />
        <AppContext.Provider value={contextElements}>
          <Switch>
            <Route exact path="/" component={Pantry} />
            <Route path="/shoppinglist" component={ShoppingList} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
