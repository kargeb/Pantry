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
  };

  componentDidMount() {
    console.log('Root did mount');
  }

  componentDidUpdate() {
    console.log('UPDATE');
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
