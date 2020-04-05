import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PantryView from './PantryView';
import ShoppingListView from './components/views/ShoppingListView';
import AppContext from './context';

class Root extends React.Component {
  state = {};

  render() {
    const contextElements = {
      czosz: 'czosz',
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
