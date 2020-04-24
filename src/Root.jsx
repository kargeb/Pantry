import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pantry from './views/Pantry';
import ShoppingList from './views/ShoppingList';
import AppContext from './context';
import data from './data/db.json';
import db from './fbase';
import GlobalStyle from './themes/GlobalStyle';
import Settings from './views/Settings';

class Root extends React.Component {
  state = {
    products: [],
    categories: [],
  };

  componentDidMount() {
    console.log(' Zamontyowanie PantryProductsList DID MONUT');

    this.unsubscribe = db.collection('products').onSnapshot(querySnapshot => {
      const downloadedProducts = [];
      const categories = [];

      querySnapshot.forEach(doc => {
        const newProduct = { ...doc.data() };
        downloadedProducts.push(newProduct);

        const { category } = newProduct;
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });

      this.setState({
        products: [...downloadedProducts],
        categories,
      });
    });
  }

  componentWillUnmount() {
    console.log('PantryProductsList WILL UNMONUT odmontowanie');
    this.unsubscribe();
  }

  render() {
    const contextElements = {
      ...this.state,
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
