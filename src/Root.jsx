import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PantryView from './PantryView';
import ShoppingListView from './components/views/ShoppingListView';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PantryView} />
          <Route exact path="/shoppinglist" component={ShoppingListView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
