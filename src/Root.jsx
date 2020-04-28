import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pantry from './views/Pantry';
import ShoppingList from './views/ShoppingList';
import AppContext from './context';
import data from './data/db.json';
import db from './fbase';
import GlobalStyle from './themes/GlobalStyle';
import Settings from './views/Settings';
import Nav from './components/Nav/Nav';

class Root extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.unsubscribe = db.collection('products').onSnapshot(querySnapshot => {
      const downloadedProducts = [];

      querySnapshot.forEach(doc => {
        const newProduct = { ...doc.data() };
        downloadedProducts.push(newProduct);
      });

      this.setState({
        products: [...downloadedProducts],
      });
    });
  }

  componentWillUnmount() {
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
          <Nav />
          <Switch>
            <Route exact path="/" component={Pantry} />
            <Route path="/pantry" component={Pantry} />
            <Route path="/shoppinglist" component={ShoppingList} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
